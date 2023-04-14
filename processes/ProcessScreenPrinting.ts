// Трафаретная печать (шелкография) УФ красками или лаком.
// Этот поцесс можно еще разбить на процессы: вывод форм, проявка сетки
import { roundDigits } from "../utils/roundDigits"
import { AlgImposition, AlgInput } from "./algos/AlgImposition"

export type ProductionInput = {  // данные из UI, выбор клиента
  colorsFace: number
  colorsBack: number
  colorNameFace: string
  colorNameBack: string
}

export type ProcessInput = {  // получаем из других процессов в техкарте
  detailLength: number    // = global.printSheetLength
  detailWidth: number    // ширина печатного листа
  detailQuantity: number  // печатных листов
  // sameTypesRunList: number  // кол-во повторов одинаковых тиражей. Из спуска?
}

export type MaterialInput = {     // получаем из артикула материала
  costOneKgInk: number 
}

export type MachineInput = {     // получаем из настроеек машины
  costOneHour: number 
  timePreparationMinutes: number  
  mediaPreparationForSetup: number // листов на одну приладку
  wasteMediaPerOperationPercent: number // процент на брак от тиража в % (0,12%)
  sheetsPerHour: number
  inkSqMetersPerKg: number //  расход краски 1 кг на кв. метров
}

export type MarkupInput = {     // коэфф наценки в % 
  markupMaterialPercent: number // на материал
  markupProcessPercent: number  // на стоимость работы
}

export type ProcessPropsInput = {
  production: ProductionInput
  process: ProcessInput
  material: MaterialInput
  machine: MachineInput
  markup: MarkupInput
}

export type ProcessOutput = {
  materialInkQuantityrams: number
  mediaWaste: number // бумаги на приладку (или media)
  materialCost: number
  materialPrice: number
  processTime: number
  processCost: number
  processPrice: number
  totalPrice: number
  printsSetup: number
  workStyle: string
  complexityFactor: number
  sameTypesRunList: number
}

export type ProcessDetailOutput = {
  thiknessMillimeters: number
  weigthGramsSqMeter: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    materialInkQuantityrams: -9999999, // расход краски
    mediaWaste: -99999,
    materialCost: -9999999,
    materialPrice: -9999999,
    processTime: -9999999,
    processCost: -9999999,
    processPrice: -9999999,
    totalPrice: -9999999,
    printsSetup: -9999999,
    workStyle: "stringNull",
    complexityFactor: -9999999,
    sameTypesRunList: -9999999
    // detail: {
    //   thiknessMillimeters: -9999999,
    //   weigthGramsSqMeter: -9999999,
    // }
  };

  const process = input.process;
  const material = input.material;
  const machine = input.machine;
  const markup = input.markup;

  let algInput: AlgInput = {
    colorsFace: -999999,
    colorsBack: -999999,
    types: -999999,
  };

  // Свой спуск для трафаретной печати, если нет в техкарте спуска для офсета
  // Если уже ранее спуск посчитан, то берем его 
  result.printsSetup = AlgImposition(algInput).printsSetup; //к-во приладок на 1 тираж, зависит от оборота 
  result.workStyle = AlgImposition(algInput).workStyle;
  result.complexityFactor = AlgImposition(algInput).complexityFactor;
  result.sameTypesRunList = AlgImposition(algInput).sameTypesRunList; // Пока не используем

  result.mediaWaste = (machine.mediaPreparationForSetup + process.detailQuantity * machine.wasteMediaPerOperationPercent) *
    result.complexityFactor * result.printsSetup;

  result.materialInkQuantityrams = process.detailLength * process.detailWidth * (process.detailQuantity + result.mediaWaste) * 
    result.complexityFactor * result.printsSetup /(machine.inkSqMetersPerKg * 1e3); // грамм на тираж 
  
  result.materialCost = result.materialInkQuantityrams  * material.costOneKgInk / 1000;
  result.materialPrice = result.materialCost * (markup.markupMaterialPercent / 100 + 1);
  result.materialPrice = roundDigits(result.materialPrice, 2);
 
  result.processTime = machine.timePreparationMinutes / 60 + process.detailQuantity / (machine.sheetsPerHour);
  result.processTime = roundDigits(result.processTime, 3);  // часов

  result.processCost = roundDigits(result.processTime * machine.costOneHour, 2);
  result.processPrice = roundDigits(result.processCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = roundDigits((result.processPrice + result.materialPrice), 2);

  return result;
}

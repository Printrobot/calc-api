// Брошюровка на клей - КБС (клеевое бесшовное скрепление)
import { roundDigits } from "../utils/roundDigits"
import { AlgPlatesCalc, AlgInput } from "./algos/AlgPlatesCalc"

export type ProductionInput = {  // данные из UI, выбор клиента
    detailQuantity: number  // кол-во полуфабирката 

}

export type ProcessInput = {     // получаем из других процессов в техкарте
  detailThiknessMillimeters: number // толщина детали
  detailWidth: number // уже должно быть ясно по какой стороне склейка
  detailLength: number
}

export type MaterialInput = {     // получаем из артикула материала. Привязан к клеевой машине.
  costGlueOneKg: number 
}

export type MachineInput = {     // получаем из настроеек машины
  costOneHour: number 
  timePreparationMinutes: number  
  operationsPerHour: number
  glueGrammsPerSqMeter: number
}

export type MarkupInput = {     // коэфф наценки в % 
  markupMaterialPercent: number // на материал
  markupProcessPercent: number  // на стоимость работы
}

export type ProcessPropsInput = {
  product: ProductionInput
  process: ProcessInput
  material: MaterialInput
  machine: MachineInput
  markup: MarkupInput
}

export type ProcessOutput = {
  glueConsumptionKg: number
  materialCost: number
  materialPrice: number
  workTime: number
  workCost: number
  workPrice: number
  totalPrice: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    glueConsumptionKg: -9999999,
    materialCost: -9999999,
    materialPrice: -9999999,
    workTime: -9999999,
    workCost: -9999999,
    workPrice: -9999999,
    totalPrice: -9999999,
  };

  const product = input.product;
  const process = input.process;
  const material = input.material;
  const machine = input.machine;
  const markup = input.markup;

  // let algInput: AlgInput = {
  //   colorsFace: -999999,
  //   colorsBack: -999999,
  //   workStyle: "WorkAndTurn",
  // };

  // result.platesQuantity = AlgPlatesCalc(algInput).platesQuantity; //к-во форм всего

  let glueLength = process.detailLength;  // уже должно быть ясно по какой стороне склейка (mm)
  result.glueConsumptionKg = glueLength * process.detailThiknessMillimeters * 
    machine.glueGrammsPerSqMeter * product.detailQuantity / 1e9; // kg
  result.glueConsumptionKg =roundDigits(result.glueConsumptionKg, 3)

  result.materialCost = result.glueConsumptionKg * material.costGlueOneKg;
  result.materialPrice = result.materialCost * (markup.markupMaterialPercent / 100 + 1);
  result.materialPrice = roundDigits(result.materialPrice, 2);

  result.workTime = machine.timePreparationMinutes / 60 + product.detailQuantity / machine.operationsPerHour;
  result.workTime = roundDigits(result.workTime, 3);  // часов

  result.workCost = roundDigits(result.workTime * machine.costOneHour, 2);
  result.workPrice = roundDigits(result.workCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = result.workPrice + result.materialPrice;

  return result;
}

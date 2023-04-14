// Вывод форм для офсетной печати Computer-to-Plate
import { roundDigits } from "../utils/roundDigits"
import { AlgPlatesCalc, AlgInput } from "./algos/AlgPlatesCalc"

export type ProductionInput = {  // данные из UI, выбор клиента
  productColorsFace: number,
  productColorsBack: number
}

export type ProcessInput = {     // получаем из других процессов в техкарте
  platesQuantity: number  // global.quantityForms из алгоритма в процессе офсетная печать
}

export type MaterialInput = {     // получаем из артикула материала
  costOnePlate: number 
}

export type MachineInput = {     // получаем из настроеек машины
  costOneHour: number 
  timePreparationMinutes: number  
  platesPerHour: number
}

export type MarkupInput = {     // коэфф наценки в % 
  markupMaterialPercent: number // на материал
  markupProcessPercent: number  // на стоимость работы
}

export type ProcessPropsInput = {
  process: ProcessInput
  material: MaterialInput
  machine: MachineInput
  markup: MarkupInput
}

export type ProcessOutput = {
  platesQuantity: number
  materialCost: number
  materialPrice: number
  processTime: number
  processCost: number
  processPrice: number
  totalPrice: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    platesQuantity: -9999999,
    materialCost: -9999999,
    materialPrice: -9999999,
    processTime: -9999999,
    processCost: -9999999,
    processPrice: -9999999,
    totalPrice: -9999999,
  };

  const process = input.process;
  const material = input.material;
  const machine = input.machine;
  const markup = input.markup;

  let algInput: AlgInput = {
    colorsFace: -999999,
    colorsBack: -999999,
    workStyle: "WorkAndTurn",
  };

  result.platesQuantity = AlgPlatesCalc(algInput).platesQuantity; //к-во форм всего

  result.materialCost = result.platesQuantity  * material.costOnePlate;
  result.materialPrice = result.materialCost * (markup.markupMaterialPercent / 100 + 1);
  result.materialPrice = roundDigits(result.materialPrice, 2);
  // result.platesQuantity = process.platesQuantity;

  result.processTime = machine.timePreparationMinutes / 60 + process.platesQuantity / (machine.platesPerHour);
  result.processTime = roundDigits(result.processTime, 3);  // часов

  result.processCost = roundDigits(result.processTime * machine.costOneHour, 2);
  result.processPrice = roundDigits(result.processCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = result.processPrice + result.materialPrice;

  return result;
}

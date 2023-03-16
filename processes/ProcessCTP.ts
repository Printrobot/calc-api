// Вывод форм для офсетной печати Computer-to-Plate
import { roundDigits } from "../utils/roundDigits"
// import { AlgPlatesCalc } from "../processes/algos/AlgPlatesCalc"
// C:\Kirill\CALCULATOR\js\processes\algos\AlgPlatesCalc

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
  workTime: number
  workCost: number
  workPrice: number
  totalPrice: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    platesQuantity: -9999999,
    materialCost: -9999999,
    materialPrice: -9999999,
    workTime: -9999999,
    workCost: -9999999,
    workPrice: -9999999,
    totalPrice: -9999999,
  };

  const process = input.process;
  const material = input.material;
  const machine = input.machine;
  const markup = input.markup;

  // result.materialQuantity = AlgPlatesCalc();
  // result.plareslQuantity = 4; //к-во форм всего

  result.materialCost = process.platesQuantity * material.costOnePlate;
  result.materialPrice = result.materialCost * (markup.markupMaterialPercent / 100 + 1);
  result.materialPrice = roundDigits(result.materialPrice, 2);
  result.platesQuantity = process.platesQuantity;

  result.workTime = machine.timePreparationMinutes / 60 + process.platesQuantity / (machine.platesPerHour);
  result.workTime = roundDigits(result.workTime, 3);  // часов

  result.workCost = roundDigits(result.workTime * machine.costOneHour, 2);
  result.workPrice = roundDigits(result.workCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = result.workPrice + result.materialPrice;

  return result;
}

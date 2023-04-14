// Фальцовка листа. Паралл-ые и перпенд-ые фальцы
import { roundDigits } from "../utils/roundDigits"

export type ProductionInput = {  // данные из UI, выбор клиента
  quantity: number,
  types: number,
  foldingParallel: number // фальцев парал
  foldingPerpendicular: number // фальцев перпенд
}

export type MachineInput = {     // получаем из настроеек машины
  costOneHour: number 
  timePreparationMinutes: number  
  operationsPerHour: number
}

export type MarkupInput = {     // коэфф наценки в % 
  markupProcessPercent: number  // на стоимость работы
}

export type ProcessPropsInput = {
  // process: ProcessInput
  product: ProductionInput
  machine: MachineInput
  markup: MarkupInput
}

export type ProcessOutput = {
  processTime: number
  processCost: number
  processPrice: number
  totalPrice: number
  detail: ProcessDetailOutput
}

export type ProcessDetailOutput = {
  width: number,
  length: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    processTime: -9999999,
    processCost: -9999999,
    processPrice: -9999999,
    totalPrice: -9999999,
    detail: {
      width: -9999999,
      length: -9999999
    }
  };

  const product = input.product;
  const machine = input.machine;
  const markup = input.markup;

  // меняем ширину и длину детали после сложения для передачи в следующий процес: 
  result.detail.width = 99; // где брать размер?
  result.detail.length = 210;

  // Может зависеть от кол-ва и типа фальцев. Из таблицы настроеек машины
  // machine.operationsPerHour
  // machine.timePreparationMinutes

  result.processTime = product.quantity / machine.operationsPerHour + machine.timePreparationMinutes / 60 //в часах
  result.processTime = roundDigits(result.processTime, 3);

  result.processCost = roundDigits(result.processTime * machine.costOneHour, 2);
  result.processPrice = roundDigits(result.processCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = result.processPrice;

  return result;
}

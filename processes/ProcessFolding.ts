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
  workTime: number
  workCost: number
  workPrice: number
  totalPrice: number
  detail: ProcessDetailOutput
}

export type ProcessDetailOutput = {
  width: number,
  length: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    workTime: -9999999,
    workCost: -9999999,
    workPrice: -9999999,
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

  result.workTime = product.quantity / machine.operationsPerHour + machine.timePreparationMinutes / 60 //в часах
  result.workTime = roundDigits(result.workTime, 3);

  result.workCost = roundDigits(result.workTime * machine.costOneHour, 2);
  result.workPrice = roundDigits(result.workCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = result.workPrice;

  return result;
}

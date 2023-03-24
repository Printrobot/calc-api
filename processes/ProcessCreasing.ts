// Биговка
import { roundDigits } from "../utils/roundDigits"

export type ProductionInput = {  // данные из UI, выбор клиента
  quantity: number,
  types: number,
  creasingQuantity: number // бигов на изделии
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
  product: ProductionInput
  machine: MachineInput
  markup: MarkupInput
}

export type ProcessOutput = {
  workTime: number
  workCost: number
  workPrice: number
  totalPrice: number
}


export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    workTime: -9999999,
    workCost: -9999999,
    workPrice: -9999999,
    totalPrice: -9999999,
  };

  const product = input.product;
  const machine = input.machine;
  const markup = input.markup;

  // Может зависеть от кол-ва бигов. Из таблицы настроеек машины
  // machine.operationsPerHour
  // machine.timePreparationMinutes

  result.workTime = product.quantity / machine.operationsPerHour + machine.timePreparationMinutes / 60 //в часах
  result.workTime = roundDigits(result.workTime, 3);

  result.workCost = roundDigits(result.workTime * machine.costOneHour, 2);
  result.workPrice = roundDigits(result.workCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = result.workPrice;

  return result;
}

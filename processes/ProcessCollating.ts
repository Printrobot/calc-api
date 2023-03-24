// Листоподбор
import { roundDigits } from "../utils/roundDigits"

export type ProcessInput = {     // получаем из других процессов в техкарте
  detailQuantity: number  // тираж
  detailTypes: number // в одном подборе листов
  detailWidth: number
  detailLength: number
  detailHeigth: number
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
  process: ProcessInput
  // product: ProductionInput
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
  length: number,
  heigth: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    workTime: -9999999,
    workCost: -9999999,
    workPrice: -9999999,
    totalPrice: -9999999,
    detail: {
      width: -9999999,
      length: -9999999,
      heigth: -999999
    }
  };

  const process = input.process;
  const machine = input.machine;
  const markup = input.markup;

  // меняем высоту детали после подбора: 
  result.detail.width = process.detailWidth;
  result.detail.length = process.detailLength;
  result.detail.heigth = process.detailHeigth * process.detailTypes;

  result.workTime = process.detailQuantity / machine.operationsPerHour + machine.timePreparationMinutes / 60 //в часах
  result.workTime = roundDigits(result.workTime, 3);

  result.workCost = roundDigits(result.workTime * machine.costOneHour, 2);
  result.workPrice = roundDigits(result.workCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = result.workPrice;

  return result;
}

// Подрезка брошюр, журналов и т.п с одной, двух или трех сторон
// Резка любой детали на заданное кол-во изделий
import { roundDigits } from "../utils/roundDigits"

export type ProcessInput = {     // получаем из других процессов в техкарте
  detailQuantity: number  // кол-во полуфабирката до резки
  detailThiknessMillimeters: number // толщина детали
  cutsOnOneDetail: number // резов на листе, детали, сторон подрезки
}

export type MachineInput = {     // получаем из настроеек машины
  costOneHour: number 
  timePreparationMinutes: number  
  cutsPerMinutes: number
  reamHeightMax: number // dir:cutting.m_ream_height высота стопы макс
}

export type MarkupInput = {     // коэфф наценки в % 
  // markupMaterialPercent: number // на материал
  markupProcessPercent: number  // на стоимость работы
}

export type ProcessPropsInput = {
  process: ProcessInput
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
  cutsOnDetail: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    workTime: -9999999,
    workCost: -9999999,
    workPrice: -9999999,
    totalPrice: -9999999,
    detail: {
      cutsOnDetail: -9999999,
    }
  };

  const process = input.process;
  const machine = input.machine;
  const markup = input.markup;

  //к-во резов на одной детали должно быть посчитано в процессе офсет печать, algImposition (если нет процесса офсет печать?)
  result.detail.cutsOnDetail = process.cutsOnOneDetail; 

  //к-во приверток 
  let reams = process.detailQuantity * process.detailThiknessMillimeters / machine.reamHeightMax;

  result.workTime = (result.detail.cutsOnDetail  * reams / machine.cutsPerMinutes + machine.timePreparationMinutes) / 60 //в часах
  result.workTime = roundDigits(result.workTime, 3);

  result.workCost = roundDigits(result.workTime * machine.costOneHour, 2);
  result.workPrice = roundDigits(result.workCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = result.workPrice;

  return result;
}

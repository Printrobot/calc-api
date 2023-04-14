// Резка листов перед печатью
import { roundDigits } from "../utils/roundDigits"

export type ProcessInput = {     // получаем из других процессов в техкарте
  detailQuantity: number  // = global.printSheetQuantity
  detailThiknessMillimeters: number // толщина детали
  cutsOnOneSheet: number // из спуска полос, как резать лист в формат печати
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
  processTime: number
  processCost: number
  processPrice: number
  totalPrice: number
  detail: ProcessDetailOutput
}

export type ProcessDetailOutput = {
  cutsOnDetail: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    processTime: -9999999,
    processCost: -9999999,
    processPrice: -9999999,
    totalPrice: -9999999,
    detail: {
      cutsOnDetail: -9999999,
    }
  };

  const process = input.process;
  const machine = input.machine;
  const markup = input.markup;

  //к-во резов на одном листе берем из алг-а спуска полос
  result.detail.cutsOnDetail = process.cutsOnOneSheet; 

  //к-во приверток 
  let reams = process.detailQuantity * process.detailThiknessMillimeters / machine.reamHeightMax;

  result.processTime = (result.detail.cutsOnDetail  * reams / machine.cutsPerMinutes + machine.timePreparationMinutes) / 60 //в часах
  result.processTime = roundDigits(result.processTime, 3);

  result.processCost = roundDigits(result.processTime * machine.costOneHour, 2);
  result.processPrice = roundDigits(result.processCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = result.processPrice;

  return result;
}

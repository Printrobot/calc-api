// Брошюровка на скрепки
import { roundDigits } from "../utils/roundDigits"

export type ProductionInput = {  // данные из UI, выбор клиента
    detailQuantity: number  // кол-во полуфабирката 
    detailStaplesQuantity: number // 2, 3, 4 скрепки на брошюру
    detailStaplesType: string // обычная скоба, евроскоба для папок
}

export type ProcessInput = {     // получаем из других процессов в техкарте
  detailThiknessMillimeters: number // толщина детали
  detailWidth: number // уже должно быть ясно по какой стороне брошюровка
  detailLength: number
}

export type MaterialInput = {     // получаем из артикула материала. Цена метра проволки
  costWireOneMeter: number 
}

export type MachineInput = {     // получаем из настроеек машины
  costOneHour: number 
  timePreparationMinutes: number  
  operationsPerHour: number
  wireCentimetersPerStaple: number
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
  wireConsumptionMeters: number
  materialCost: number
  materialPrice: number
  workTime: number
  workCost: number
  workPrice: number
  totalPrice: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    wireConsumptionMeters: -9999999,
    materialCost: -9999999,
    materialPrice: -9999999,
    workTime: -9999999,
    workCost: -9999999,
    workPrice: -9999999,
    totalPrice: -9999999,
  };

  const product = input.product;
  // const process = input.process;
  const material = input.material;
  const machine = input.machine;
  const markup = input.markup;

  result.wireConsumptionMeters = machine.wireCentimetersPerStaple * product.detailQuantity / 100; // м
  result.wireConsumptionMeters =roundDigits(result.wireConsumptionMeters, 3)

  result.materialCost = result.wireConsumptionMeters * material.costWireOneMeter ;
  result.materialPrice = result.materialCost * (markup.markupMaterialPercent / 100 + 1);
  result.materialPrice = roundDigits(result.materialPrice, 2);

  result.workTime = machine.timePreparationMinutes / 60 + product.detailQuantity / machine.operationsPerHour;
  result.workTime = roundDigits(result.workTime, 3);  // часов

  result.workCost = roundDigits(result.workTime * machine.costOneHour, 2);
  result.workPrice = roundDigits(result.workCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = roundDigits(result.workPrice + result.materialPrice, 2);

  return result;
}
// Расчет кол-ва необходимой бумаги для печати с учетом отходов во всех процессах техкарты
import { roundDigits } from "../utils/roundDigits"

export type ProcessInput = {     // получаем из других процессов в техкарте
  detailQuantity: number  // листов на тираж с учетом отходов во всех процессах техкарты
}

export type MaterialInput = {     // получаем из артикула материала
  // costMediaOneKg: number // цена за кг
  costMediaOneSheet: number // цена за лист
  detailWeigthGramsSqMeter: number // вес грамм кв метра детали (листа)
  detailThiknessMillimeters: number // толщина детали
  detailLength: number    // длина бумаги
  detailWidth: number    // ширина бумаги
}

export type MarkupInput = {     // коэфф наценки в % 
  markupMaterialPercent: number // на материал
  // markupProcessPercent: number  // на стоимость работы
}

export type ProcessPropsInput = {
  process: ProcessInput
  material: MaterialInput
  markup: MarkupInput
}

export type ProcessOutput = {
  materialQuantity: number
  materialWeigth: number
  materialCost: number
  materialPrice: number
  totalPrice: number
}

export type ProcessDetailOutput = {
  thiknessMillimeters: number
  weigthGramsSqMeter: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    materialQuantity: -9999999,
    materialWeigth: -9999999,
    materialCost: -9999999,
    materialPrice: -9999999,
    totalPrice: -9999999,
  };

  const process = input.process;
  const material = input.material;
  const markup = input.markup;

  // result.materialWaste = сумма из всех процессов

  result.materialWeigth = material.detailLength * material.detailWidth *
    material.detailWeigthGramsSqMeter * process.detailQuantity / 1e9; // вес всей бумаги в кг

  result.materialQuantity = process.detailQuantity;

  // if (material.costMediaOneKg > 0) {
  //   result.materialCost = result.materialWeigth * material.costMediaOneKg
  // } else if (material.costMediaOneSheet ) {
  //   result.materialCost = process.detailQuantity * material.costMediaOneSheet
  // } else {
  //   result.materialCost = 0
  // }

  result.materialCost = process.detailQuantity * material.costMediaOneSheet
  result.materialPrice = result.materialCost * (markup.markupMaterialPercent / 100 + 1);
  result.materialPrice = roundDigits(result.materialPrice, 2);

  result.totalPrice = result.materialPrice;

  return result;
}
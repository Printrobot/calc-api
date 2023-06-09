// Рулонная ламинация листов с двух или с одной стороны
import { ProductionInput } from "../production"
import { roundDigits } from "../utils/roundDigits"

// export type ProductionInput = {  // данные из UI, выбор клиента
//   quantity: number,
//   types: number,
//   laminationSides: number // 1 или 2 стороны надо заламинировать
// }

export type ProcessInput = {     // получаем из других процессов в техкарте
  detailLength: number    // = global.printSheetLength
  detailQuantity: number  // = global.printSheetQuantity
  detailWeigthGramsSqMeter: number // вес грамм кв метра детали
  detailThiknessMillimeters: number // толщина детали
}

export type MaterialInput = {     // получаем из артикула материала
  costFilmOneMeter: number // global.printSheetLength
  thiknessFilmMicrometers: number  // Толщина ламината мкм
  lengthFilmRoll: number 
  widthFilmRoll: number
  weigthFilmRollKg: number  // вес рулона в кг
}

export type MachineInput = {     // получаем из настроеек машины
  costOneHour: number 
  timePreparationMinutes: number  
  metersPerHour: number
  sidesPerOperation: number // dir:laminating.m_both_sides, 1 или 2 стороны за прогон
  wasteFilmPerOperationPercent: number
}

export type MarkupInput = {     // коэфф наценки в % 
  markupMaterialPercent: number // на материал
  markupProcessPercent: number  // на стоимость работы
}

export type ProcessPropsInput = {
  production: ProductionInput
  process: ProcessInput
  material: MaterialInput
  machine: MachineInput
  markup: MarkupInput
}

export type ProcessOutput = {
  materialQuantity: number
  materialWaste: number
  materialCost: number
  materialPrice: number
  processTime: number
  processCost: number
  processPrice: number
  totalPrice: number
  detail: ProcessDetailOutput
}

export type ProcessDetailOutput = {
  thiknessMillimeters: number
  weigthGramsSqMeter: number
}

export function ProcessCalc(input: ProcessPropsInput): ProcessOutput {
  const result: ProcessOutput = {
    materialQuantity: -9999999,
    materialWaste: -9999999,
    materialCost: -9999999,
    materialPrice: -9999999,
    processTime: -9999999,
    processCost: -9999999,
    processPrice: -9999999,
    totalPrice: -9999999,
    detail: {
      thiknessMillimeters: -9999999,
      weigthGramsSqMeter: -9999999,
    }
  };

  const production = input.production;
  const process = input.process;
  const material = input.material;
  const machine = input.machine;
  const markup = input.markup;

  result.materialWaste = (machine.wasteFilmPerOperationPercent / 100 + 1);
  result.materialQuantity = (process.detailLength * production.laminationSides * process.detailQuantity / 1000) + result.materialWaste;
    
  result.materialCost = result.materialQuantity * material.costFilmOneMeter;
  result.materialPrice = result.materialCost * (markup.markupMaterialPercent / 100 + 1);
  result.materialPrice = roundDigits(result.materialPrice, 2);

  result.processTime = machine.timePreparationMinutes / 60 + (process.detailLength / (1000 * machine.sidesPerOperation)) *
    (process.detailQuantity / machine.metersPerHour);
  result.processTime = roundDigits(result.processTime, 3);

  result.processCost = roundDigits(result.processTime * machine.costOneHour, 2);
  result.processPrice = roundDigits(result.processCost * (markup.markupProcessPercent / 100 + 1), 2);

  result.totalPrice = result.processPrice + result.materialPrice;

  // меняем толщину и вес детали: 
  result.detail.thiknessMillimeters = process.detailThiknessMillimeters +
    material.thiknessFilmMicrometers / 1000 * production.laminationSides;

  result.detail.weigthGramsSqMeter = process.detailWeigthGramsSqMeter +
    roundDigits(1e6 * material.weigthFilmRollKg / (material.lengthFilmRoll * material.widthFilmRoll), 2);

  return result;
}
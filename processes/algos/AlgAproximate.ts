// Расчет цены цифровой печати.
// Есть массив costDigitalPrinting [тираж, себестоимость оттиска] сохраняем в отдельном файле и можем подключать к разным печатным машинам.
// Находим себест печати cost при заданном тираже detailQuantity
// Находим между какими тиражами leftQuantity и rightQuantity лежит detailQuantity
// Если costRight > costLeft то
// cost = (costRight - costLeft) * (AmountRight - global.printSheetQuantity) / (AmountRight - AmountLeft) + CostRight
// Если costRight < costLeft то
// cost = (costLeft - costRight) * (AmountRight - global.printSheetQuantity) / (AmountRight - AmountLeft) + CostLeft
// Если global.printSheetQuantity =< costLeft то global.printSheetQuantity = costLeft
// Если global.printSheetQuantity >= costRight то global.printSheetQuantity = costRight

export type AlgInput = {
  detailQuantity: number,
  costDigitalPrinting: Map<number, number>
}

export type AlgOutput = {
  cost: number
}

export function AlgPlatesCalc(params: AlgInput): AlgOutput {
  // console.log(AlgInput);
  const result: AlgOutput = {
    cost: 26,
  }
  return result;
}

let algInput: AlgInput = {
  detailQuantity: 120,
  costDigitalPrinting = new Map([10, 44], [20, 35]);
}

let costFound = AlgPlatesCalc(algInput).cost;
console.log(costFound);

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

import { AlgPlatesCalc } from "./AlgPlatesCalc"

export type AlgInputAprox = {
  detailRunList: number,
  // costDigitalPrinting: Map<number, number>
  costDigitalPrintingArray: QuantityCost[]
}

export type QuantityCost = {
  runList: number,
  cost: number,
}

export type AlgOutput = {
  costFound: number
}

export function AlgAproximate(params: AlgInputAprox): AlgOutput {

  function sortByRunList(arr: QuantityCost[]) {
    arr.sort((a: QuantityCost, b: QuantityCost) => a.runList > b.runList ? 1 : -1);
  }

  let arr = algInput.costDigitalPrintingArray;
  sortByRunList(arr);

  let leftQuantity = 0;
  let rightQuantity = 0;
  let leftCost = 0;
  let rightCost = 0;
  // let leftQuantity =  (typeof arr[0] === 'undefined')  ?  0 : arr[0].runList;
  // let rightQuantity =  (typeof arr[1] === 'undefined')  ?  0 : arr[1].runList;

  for(let i = 0; i < arr.length; i++) {

    if (algInput.detailRunList >= arr[i].runList) {
      leftQuantity = arr[i].runList;
      rightQuantity =  (typeof arr[i+1] === 'undefined')  ?  arr[i].runList : arr[i+1].runList;
      // leftCost = arr[i].cost;
      // rightCost =  (typeof arr[i+1] === 'undefined')  ?  arr[i].cost : arr[i+1].cost;
    }else{
      // leftQuantity = arr[i].runList;
      rightQuantity =  arr[i].runList;
      // rightCost = arr[i].cost;
      break;
    };
  }

  // costFound = (costRight - costLeft) * (AmountRight - global.printSheetQuantity) / (AmountRight - AmountLeft) + CostRight
  
  costFound = (arr[leftIndex].cost - costLeft) * (AmountRight - global.printSheetQuantity) / (AmountRight - AmountLeft) + CostRight

  console.log("leftQuantity = ", leftQuantity, "rightQuantity = ", rightQuantity,
    "leftCost = ", leftCost, "rightCost = ", rightCost);

  const result: AlgOutput = {
    costFound: 26,
  }

  return result;
}

let algInput: AlgInputAprox = {
  detailRunList: 11,
  costDigitalPrintingArray: [
    {"runList": 5, "cost": 36},
    {"runList": 10, "cost": 32},
    {"runList": 20, "cost": 30},
    {"runList": 50, "cost": 28}],
}

let costFound = AlgAproximate(algInput).costFound;
console.log(costFound);

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

  function sortByRunList(arr) {
    arr.sort((a, b) => a.runList > b.runList ? 1 : -1);
  }

let arr = algInput.costDigitalPrintingArray;
console.log(arr);
sortByRunList(arr);
console.log(arr);

  const result: AlgOutput = {
    costFound: 26,
  }

  return result;
}

let algInput: AlgInputAprox = {
  detailRunList: 26,
  costDigitalPrintingArray: [
    {"runList": 10, "cost": 32},
    {"runList": 30, "cost": 32},
    {"runList": 20, "cost": 32},
    {"runList": 5, "cost": 28}],
    
  // costDigitalPrinting: new Map([[15, 42], [20, 14], [30, 32], [50, 28], [100, 20], [110, 20]]),
}

let costFound = AlgAproximate(algInput).costFound;
console.log(costFound);



  // let leftRunList = algInput.detailRunList;
  // let rightRunList = algInput.detailRunList;
  // let minLeft = - algInput.detailRunList;
  // let minRigth = algInput.detailRunList;

  // for(let key of algInput.costDigitalPrinting.keys()) {
  //     if (minRigth <= 0 && algInput.detailRunList - key >= minLeft) {
  //       minLeft = algInput.detailRunList - key;
  //       leftRunList = key; 
        
  //       console.log('key1 =', key, 'value =', algInput.costDigitalPrinting.get(key),
  //       'minLeft = ',minLeft, ' minRigth =', minRigth,   
  //       'leftRunList = ', leftRunList, 'rightRunList = ', rightRunList);
  //     }
  //     if (minRigth >= 0 && algInput.detailRunList - key <= minRigth) {
  //       minRigth = algInput.detailRunList - key;
  //       rightRunList = key; 

  //       console.log('key2 =', key, 'value =', algInput.costDigitalPrinting.get(key),
  //       'minLeft = ',minLeft, ' minRigth =', minRigth,   
  //       'leftRunList = ', leftRunList, 'rightRunList = ', rightRunList);
  //     }
  // }
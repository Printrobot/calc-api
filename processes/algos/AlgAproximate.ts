// Расчет цены цифровой печати.
// Есть массив costDigitalPrinting [тираж, себестоимость оттиска] сохраняем в отдельном файле и можем подключать к разным печатным машинам.
// Находим себест печати costFound при заданном тираже detailQuantity
// Находим между какими тиражами leftQuantity и rightQuantity лежит detailQuantity, 
//   если за пределами отрезка, то берем крайнее значение

export type AlgInputAprox = {
  detailRunList: number,
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

  let result: AlgOutput = {
    costFound: 26 // для тестов mock
  }

  let arr = algInput.costDigitalPrintingArray;

  if(!arr || !arr.length) {
    return console.log("Таблица 'тираж-цена печати' пустая");
  }

  sortByRunList(arr); // отсортировали по возрастанию тиражей

  let leftQuantity = 0;
  let rightQuantity = 0;
  let leftCost = arr[0].cost;
  let rightCost = arr[0].cost;
  let costFound = 0;

  for(let i = 0; i < arr.length; i++) { // находим между какими точками тиражей из таблицы лежит искомый тираж

    if (algInput.detailRunList >= arr[i].runList) {
      leftQuantity = arr[i].runList;
      leftCost = arr[i].cost;
        if (typeof arr[i+1] === 'undefined') { // искомый тираж за пределами макс-го тиража в таблице
          rightQuantity = arr[i].runList;
          rightCost =  arr[i].cost; 
        }else{
          rightQuantity = arr[i+1].runList;
          rightCost =  arr[i+1].cost;
        }
    }else{
      rightQuantity =  arr[i].runList;
      rightCost = arr[i].cost;
      break;
    };
  }

  if (rightQuantity - leftQuantity == 0) { // искомый тираж совпадает с тиражом в таблице
    costFound = rightCost;
  } else { // линейная интерполяция по двум точкам
    costFound = (rightCost - leftCost) * (algInput.detailRunList - leftQuantity) / (rightQuantity - leftQuantity) + leftCost;
  }

  console.log("leftQuantity = ", leftQuantity, "rightQuantity = ", rightQuantity,
    "leftCost = ", leftCost, "rightCost = ", rightCost);
  console.log("costFound: ", costFound);


  
  return result;
}

let algInput: AlgInputAprox = {
  detailRunList: 250,
  costDigitalPrintingArray: [
    // {"runList": 5, "cost": 36},
    // {"runList": 10, "cost": 32},
    // {"runList": 20, "cost": 30},
    // {"runList": 30, "cost": 20}], 
  ]
}

let costFound = AlgAproximate(algInput).costFound;
console.log(costFound);

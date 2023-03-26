import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessDigitalPrinting"
import { assertEqual } from "../compare/assertEqual"
// import { AlgImposition, AlgInput } from "../../processes/algos/AlgImposition"

const input: ProcessPropsInput = {
  production: {
    productColorsFace: 4,
    productColorsBack: 4
  },
  process: {
    detailLength: 320,
    detailWidth: 450,
    detailQuantity: 20,
    // sameTypes: 1 
  },
  // material: {
  //   costOneKgInk: 1200
  // },
  machine: {
    costOneHour: 4020, 
    timePreparationMinutes: 10,  
    mediaPreparationForSetup: 2, // листов на одну приладку
    wasteMediaPerOperationPercent: 0.01, // процент на брак от тиража в % (0,12%)
    sheetsPerHour: 2000,
    inksGramsPerSqMeters: 1.2 // расход краски г на кв. метр листа
  },
  markup: {
    markupMaterialPercent: 10, // на материал краска
    markupProcessPercent: 10
  },
}

const outputExpected: ProcessOutput = {
  // materialInkQuantity: 599.4,
  mediaWaste: 4, 
  // materialCost: 719.28,
  // materialPrice: 791.21,
  workTime: 0.177,
  workCost: 26,
  workPrice: 28.6,
  totalPrice: 28.6,
  printsSetup: 1,
  workStyle: "WorkAndTurn",
  coefWorkStyle: 2,
  sameTypesRunList: 1,
  cutsOnDetail: 2
}

const outputActual = ProcessCalc(input);
console.log("input:\n", input);
console.log("outputActual:\n", outputActual);


if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
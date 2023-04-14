import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessScreenPrinting"
import { assertEqual } from "../compare/assertEqual"
// import { AlgImposition, AlgInput } from "../../processes/algos/AlgImposition"

const input: ProcessPropsInput = {
  production: {
    colorsFace: 1,
    colorsBack: 1,
    colorNameFace: 'УФ лак глянцевый',
    colorNameBack: ''
  },
  process: {
    detailLength: 450,
    detailWidth: 500,
    detailQuantity: 1000,
    // sameTypes: 1 
  },
  material: {
    costOneKgInk: 6000
  },
  machine: {
    costOneHour: 5000, 
    timePreparationMinutes: 30,  
    mediaPreparationForSetup: 5, // листов на одну приладку
    wasteMediaPerOperationPercent: 0.02, // процент на брак от тиража в % (0,12%)
    sheetsPerHour: 500,
    inkSqMetersPerKg: 100 // расход краски 1 кг на кв. метров
  },
  markup: {
    markupMaterialPercent: 10, // на материал краска
    markupProcessPercent: 10
  },
}

const outputExpected: ProcessOutput = {
  materialInkQuantityrams: 4725,
  mediaWaste: 50, 
  materialCost: 28350,
  materialPrice: 31185,
  processTime: 2.5,
  processCost: 12500,
  processPrice: 13750,
  totalPrice: 44935,
  printsSetup: 1,
  workStyle: "WorkAndTurn",
  complexityFactor: 2,
  sameTypesRunList: 1,
}

const outputActual = ProcessCalc(input);
console.log("input:\n", input);
console.log("outputActual:\n", outputActual);


if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
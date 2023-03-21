import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessOffsetSheetPrinting"
import { assertEqual } from "../compare/assertEqual"
import { AlgImposition, AlgInput } from "../../processes/algos/AlgImposition"

const input: ProcessPropsInput = {
  production: {
    productColorsFace: 4,
    productColorsBack: 4
  },
  process: {
    detailLength: 450,
    detailWidth: 500,
    detailQuantity: 1000,
    // sameTypes: 1 
  },
  material: {
    costOneKgInk: 1200
  },
  machine: {
    costOneHour: 4020, 
    timePreparationMinutes: 35,  
    mediaPreparationForSetup: 25, // листов на одну приладку
    wasteMediaPerOperationPercent: 0.03, // процент на брак от тиража в % (0,12%)
    sheetsPerHour: 4600,
    inksGramsPerSqMeters: 1.2 // расход краски г на кв. метр листа
  },
  markup: {
    markupMaterialPercent: 10, // на материал краска
    markupProcessPercent: 10
  },
}

// export type ProcessPropsInput = {
//   process: ProcessInput
//   material: MaterialInput
//   machine: MachineInput
//   markup: MarkupInput
// }

const outputExpected: ProcessOutput = {
  materialInkQuantity: 599.4,
  mediaWaste: 110, 
  materialCost: 719.28,
  materialPrice: 791.21,
  workTime: 0.801,
  workCost: 3220.02,
  workPrice: 3542.02,
  totalPrice: 4333.23,
  printsSetup: 1,
  workStyle: "WorkAndTurn",
  coefWorkStyle: 2,
  sameTypes: 1,
  // detail:  {
  //   thiknessMillimeters: 0.03,
  //   weigthGramsSqMeter: 170,
  // }
}

const outputActual = ProcessCalc(input);
console.log("input:\n", input);
console.log("outputActual:\n", outputActual);


if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
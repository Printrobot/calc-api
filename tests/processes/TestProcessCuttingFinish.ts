import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessCuttingFinish"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  process: {
    detailQuantity: 155,
    detailThiknessMillimeters: 0.08,
    // cutsOnOneSheet: 2,
    cutsOnOnePrintSheet: 6 
  },
  machine: {
    costOneHour: 1200,
    timePreparationMinutes: 5,
    cutsPerMinutes: 2,
    reamHeightMax: 70,
  },
  markup: {
    // markupMaterialPercent: 10,
    markupProcessPercent: 10,
  }
};

const outputExpected: ProcessOutput = {
  workTime: 0.092,
  workCost: 110.4,
  workPrice: 121.44,
  totalPrice: 121.44,
  detail: {
    cutsOnDetail: 6,
  }
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
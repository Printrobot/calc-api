import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessCuttingSheets"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  process: {
    detailQuantity: 155,
    detailThiknessMillimeters: 0.08,
    cutsOnOneSheet: 2,
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
  processTime: 0.086,
  processCost: 103.2,
  processPrice: 113.52,
  totalPrice: 113.52,
  detail: {
    cutsOnDetail: 2,
  }
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
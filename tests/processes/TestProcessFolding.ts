import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessFolding"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  product: {
    quantity: 500,
    types: 1,
    foldingParallel: 2, // фальцев парал
    foldingPerpendicular: 0, // 
  },
  machine: {
    costOneHour: 1100,
    timePreparationMinutes: 20,
    operationsPerHour: 6000,
  },
  markup: {
    markupProcessPercent: 10,
  }
};

const outputExpected: ProcessOutput = {
  workTime: 0.417,
  workCost: 458.7,
  workPrice: 504.57,
  totalPrice: 504.57,
  detail: {
    width: 99,
    length: 210
  }
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
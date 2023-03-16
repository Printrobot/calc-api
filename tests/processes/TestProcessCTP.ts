import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessCTP"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  process: {
    platesQuantity: 16,
  },
  material: {
    costOnePlate: 150,
  },
  machine: {
    costOneHour: 630,
    timePreparationMinutes: 5,
    platesPerHour: 16,
  },
  markup: {
    markupMaterialPercent: 10,
    markupProcessPercent: 10,
  }
};

const outputExpected: ProcessOutput = {
  platesQuantity: 16,
  materialCost: 2400,
  materialPrice: 2640,
  workTime: 1.083,
  workCost: 682.29,
  workPrice: 750.52,
  totalPrice: 3390.52,
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
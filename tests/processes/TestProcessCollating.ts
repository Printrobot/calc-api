import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessCollating"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  // product: {
  //   quantity: 500,
  //   types: 1,
  //   foldingParallel: 2, // фальцев парал
  //   foldingPerpendicular: 0, // 
  // },
  process: {
    detailQuantity: 100,
    detailTypes: 10,
    detailLength: 500,
    detailWidth: 350,
    detailHeigth: 0.12
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
  processTime: 0.35,
  processCost: 385,
  processPrice: 423.5,
  totalPrice: 423.5,
  detail: {
    width: 350,
    length: 500,
    heigth: 1.2
  }
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
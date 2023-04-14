import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessStapledBinding"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  product: {
    detailQuantity: 1000,
    detailStaplesQuantity: 2,
    detailStaplesType: 'regular'
  },
  process: {
    detailThiknessMillimeters: 12,
    detailLength: 297,
    detailWidth: 210,
  },
  material: {
    costWireOneMeter: 100,
  },
  machine: {
    costOneHour: 1200,
    timePreparationMinutes: 5,
    operationsPerHour: 200,
    wireCentimetersPerStaple: 1.5,
  },
  markup: {
    markupMaterialPercent: 10,
    markupProcessPercent: 10,
  }
};

const outputExpected: ProcessOutput = {
  wireConsumptionMeters: 15,
  materialCost: 1500,
  materialPrice: 1650,
  processTime: 5.083,
  processCost: 6099.6,
  processPrice: 6709.56,
  totalPrice: 8359.56,
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessWireOBinding"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  product: {
    detailQuantity: 1000,
    detailWireColor: 'white'
  },
  process: {
    detailThiknessMillimeters: 12,
    detailLength: 297,
    detailWidth: 210,
  },
  material: {
    costWireOneMeter: 50,
  },
  machine: {
    costOneHour: 600,
    timePreparationMinutes: 5,
    operationsPerHour: 300,
    // wireCentimetersPerStaple: 1.5,
  },
  markup: {
    markupMaterialPercent: 10,
    markupProcessPercent: 10,
  }
};

const outputExpected: ProcessOutput = {
  wireConsumptionMeters: 297,
  materialCost: 14850,
  materialPrice: 16335,
  workTime: 3.417,
  workCost: 2050.2,
  workPrice: 2255.22,
  totalPrice: 18590.22,
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
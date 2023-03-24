import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessGluedBinding"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  product: {
    detailQuantity: 1000
  },
  process: {
    detailThiknessMillimeters: 12,
    detailLength: 297,
    detailWidth: 210,
  },
  material: {
    costGlueOneKg: 1000,
  },
  machine: {
    costOneHour: 630,
    timePreparationMinutes: 5,
    operationsPerHour: 450,
    glueGrammsPerSqMeter: 800,
  },
  markup: {
    markupMaterialPercent: 10,
    markupProcessPercent: 10,
  }
};

const outputExpected: ProcessOutput = {
  glueConsumptionKg: 2.851,
  materialCost: 2851,
  materialPrice: 3136.1,
  workTime: 2.306,
  workCost: 1452.78,
  workPrice: 1598.06,
  totalPrice: 4734.16,
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
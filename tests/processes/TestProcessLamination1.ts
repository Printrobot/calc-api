import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessLamination"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  production: {
    quantity: 1000,
    types: 1,
    laminationSides: 2
  },
  process: {
    detailLength: 450,
    detailQuantity: 1000,
    detailWeigthGramsSqMeter: 170,
    detailThiknessMillimeters: 0.12,
  },
  material: {
    costFilmOneMeter: 8,
    thiknessFilmMicrometers: 30,
    lengthFilmRoll: 3000,
    widthFilmRoll: 450,
    weigthFilmRollKg: 20,
  },
  machine: {
    costOneHour: 3700,
    timePreparationMinutes: 25,
    metersPerHour: 2000,
    sidesPerOperation: 2,
    wasteFilmPerOperationPercent: 2,
  },
  markup: {
    markupMaterialPercent: 10,
    markupProcessPercent: 10,
  }
};

const outputExpected: ProcessOutput = {
  materialQuantity: 901.02,
  materialWaste: 1.02,
  materialCost: 7208.16,
  materialPrice: 7928.98,
  workTime: 0.529,
  workCost: 1957.3,
  workPrice: 2153.03,
  totalPrice: 10082.01,
  detail: {
    thiknessMillimeters: 0.18,
    weigthGramsSqMeter: 184.81,
  }
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
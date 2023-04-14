import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessLamination"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  production: {
    quantity: 1000,
    types: 1,
    laminationSides: 1
  },
  process: {
    detailLength: 500,
    detailQuantity: 1000,
    detailWeigthGramsSqMeter: 170,
    detailThiknessMillimeters: 0,
  },
  material: {
    costFilmOneMeter: 8,
    thiknessFilmMicrometers: 30,
    lengthFilmRoll: 3000,
    widthFilmRoll: 450,
    weigthFilmRollKg: 0,
  },
  machine: {
    costOneHour: 3700,
    timePreparationMinutes: 25,
    metersPerHour: 2000,
    sidesPerOperation: 2,
    wasteFilmPerOperationPercent: 0,
  },
  markup: {
    markupMaterialPercent: 0,
    markupProcessPercent: 0,
  }
};

const outputExpected: ProcessOutput = {
  materialQuantity: 501,
  materialWaste: 1,
  materialCost: 4008,
  materialPrice: 4008,
  processTime: 0.542,
  processCost: 2005.4,
  processPrice: 2005.4,
  totalPrice: 6013.4,
  detail: {
    thiknessMillimeters: 0.03,
    weigthGramsSqMeter: 170,
  }
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
}
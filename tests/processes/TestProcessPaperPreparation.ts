import { ProcessPropsInput, ProcessOutput, ProcessCalc } from "../../processes/ProcessPaperPreparation"
import { assertEqual } from "../compare/assertEqual"

const input: ProcessPropsInput = {
  process: {
    detailQuantity: 1000,
    // detailThiknessMillimeters: 0.08,
    // cutsOnOneSheet: 2,
    // cutsOnOnePrintSheet: 6 
  },
  // machine: {
  //   costOneHour: 1200,
  //   timePreparationMinutes: 5,
  //   cutsPerMinutes: 2,
  //   reamHeightMax: 70,
  // },
  material: {
    // costMediaOneKg: 0, // цена за кг
    costMediaOneSheet: 15.06, // цена за лист
    detailWeigthGramsSqMeter: 170, // вес грамм кв метра детали (листа)
    detailThiknessMillimeters: 0.12, // толщина детали
    detailLength: 940,    // длина бумаги mm
    detailWidth: 620,   // ширина бумаги mm
  },
  markup: {
    markupMaterialPercent: 10,
  }
};

const outputExpected: ProcessOutput = {
  materialQuantity: 1000,
  materialWeigth: 99.076,
  materialCost: 15060,
  materialPrice: 16566,
  totalPrice: 16566,
};

const outputActual = ProcessCalc(input);
console.log(outputActual);

if (!assertEqual(outputActual, outputExpected)) {
  console.log("Test failed")
} else {
  console.log("OK! Test passed")
} 
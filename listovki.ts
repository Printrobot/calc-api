// import { ProductionInput } from "./production"

import { ProcessCalc as ProcessDigitalCalc } from "./processes/ProcessDigitalPrinting"
import { ProcessPropsInput as ProcessDigitalPropsInput } from "./processes/ProcessDigitalPrinting"

import { ProcessCalc as ProcessLaminationCalc } from "./processes/ProcessLamination"
import { ProcessPropsInput as ProcessLaminationPropsInput } from "./processes/ProcessLamination"

import { ProcessCalc as ProcessCuttingFinishCalc } from "./processes/ProcessCuttingFinish"
import { ProcessPropsInput as ProcessCuttingFinishPropsInput } from "./processes/ProcessCuttingFinish"

// import { ProcessCalc as ProcessDetailCalc } from "./processes/ProcessCuttingDetail"
// import { ProcessPropsInput as ProcessCuttingDetailPropsInput } from "./processes/ProcessCuttingDetail"

// Листовки А4 210 х 297, 1000 шт, меловка 170 гр, печать 4+4, ламинация 1+1
// product
// подготовка бумаги - 2
// резка бумаги под формат печати - 3
// цифровая печать 4+4 чужой 320х450 мм - 1
// ламинация 1+1 - 4
// резка в готовый формат - 5

const product = {
    length: 320,
    width: 450,
    quantity: 1000,
    types: 1,
    colorsFace: 4,
    colorsBack: 4,
    media: {
      weight: 170,
      type: "мелованная",
      color: "белый",
      texture: "глянцевая"
    },
    laminationSides: 2
  };

const processDigitalPropsInput: ProcessDigitalPropsInput = {
  production: {
    productColorsFace: 4,
    productColorsBack: 4
  },
  process: {
    detailLength: 320,
    detailWidth: 450,
    detailQuantity: 20,
    // sameTypes: 1 
  },
  machine: {
    costOneHour: 4020, 
    timePreparationMinutes: 10,  
    mediaPreparationForSetup: 2, // листов на одну приладку
    wasteMediaPerOperationPercent: 0.01, // процент на брак от тиража в % (0,12%)
    sheetsPerHour: 2000,
    inksGramsPerSqMeters: 1.2 // расход краски г на кв. метр листа
  },
  markup: {
    markupMaterialPercent: 10, // на материал краска
    markupProcessPercent: 10
  },
};

const outputProcessDigitalCalc = ProcessDigitalCalc(processDigitalPropsInput)

const processLaminationPropsInput: ProcessLaminationPropsInput = {
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

const outputProcessLaminationCalc = ProcessLaminationCalc(processLaminationPropsInput)

const processCuttingFinishPropsInput: ProcessCuttingFinishPropsInput = {
    process: {
      detailQuantity: outputProcessLaminationCalc.totalPrice ,
      detailThiknessMillimeters: outputProcessLaminationCalc.materialPrice,
      // cutsOnOneSheet: 2,
      cutsOnOnePrintSheet: outputProcessLaminationCalc,
    },
    machine: {
      costOneHour: 1200, // from machile
      timePreparationMinutes: 5,
      cutsPerMinutes: 2,
      reamHeightMax: 70,
    },
    markup: {
      // markupMaterialPercent: 10,
      markupProcessPercent: 10,
    }
  };
  


const processCuttingFinishCalc = ProcessCuttingFinishCalc(processCuttingFinishPropsInput)

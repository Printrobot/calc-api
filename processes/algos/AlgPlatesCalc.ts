export type AlgInput = {
    productColorsFace: number,
    productColorsBack: number,
  }

export type AlgOutput = {
  platesQuantity: number
}

export function AlgPlatesCalc(params: AlgInput): AlgOutput {
  const result: AlgOutput = {
    platesQuantity: 24,
  }
  return result;
}
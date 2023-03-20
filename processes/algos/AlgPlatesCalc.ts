export type AlgInput = {
  colorsFace: number,
  colorsBack: number,
  workStyle: string, // app\src\mrlib\PrintFormat.php function getAvalibleWorkStyles(array $props)
  }

export type AlgOutput = {
  platesQuantity: number
}

export function AlgPlatesCalc(params: AlgInput): AlgOutput {
  const result: AlgOutput = {
    platesQuantity: 16,
  }
  return result;
}
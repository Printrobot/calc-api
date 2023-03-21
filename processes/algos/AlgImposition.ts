export type AlgInput = {
  colorsFace: number,
  colorsBack: number,
  types: number // одинаковых видов продукции
  }

export type AlgOutput = {
  cutsOnDetail: number,
  workStyle: string, // app\src\mrlib\PrintFormat.php function getAvalibleWorkStyles(array $props)
  coefWorkStyle: number,
  printsSetup: number, // приладок
  sameTypes: number // кол-во повторов одинаковых тиражей
}

export function AlgImposition(params: AlgInput): AlgOutput {
  const result: AlgOutput = {
    // схема раскладки на листе
    // резов по горизонтале и вертикале:
    cutsOnDetail: 6,
    workStyle: "WorkAndTurn",
    coefWorkStyle: 2, // 1 - без оборота, 2 - чужой или свой
    printsSetup: 1, // приладок
    sameTypes: 1
  }
  return result;
}
enum WorkStyle {
  Perfecting = 'Perfecting', // перфектор, переворот внутри машины, печать с двух сторон за цикл (4+4, 1+1, 2+2, 4+1, 5+2)
  Simplex = 'Simplex', // печать без оборота, с одной стороны
  WorkAndBack = "WorkAndBack", // чужой оборот. Отпечатали лицо, перевернули через короткую сторону и печатаем оборот
  WorkAndTumble ="WorkAndTumble", // свой оборот через длинную сторону
  WorkAndTurn = 'WorkAndTurn' // свой оборот через короткую сторону (левую или правую)
} 

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
  sameTypesRunList: number // кол-во повторов одинаковых тиражей
}

export function AlgImposition(params: AlgInput): AlgOutput {
  const result: AlgOutput = {
    // схема раскладки на листе
    // резов по горизонтале и вертикале:
    cutsOnDetail: 6,
    workStyle: WorkStyle.WorkAndTurn,
    coefWorkStyle: 2, // 1 - без оборота, 2 - чужой или свой
    printsSetup: 1, // приладок
    sameTypesRunList: 1
  }
  return result;
}
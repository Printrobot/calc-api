export function roundDigits(num: number, fractionDigits: number): number {
  return Number(num.toFixed(fractionDigits));
}
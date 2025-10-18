export function getShortNumber(value: number, decimals = 1): string {
  if (value === null || value === undefined || isNaN(value)) return "—";

  const absValue = Math.abs(value);

  const format = (num: number) => num.toFixed(decimals).replace(/\.0+$/, "");

  if (absValue >= 1_000_000_000) {
    return `${format(value / 1_000_000_000)}B`;
  }
  if (absValue >= 1_000_000) {
    return `${format(value / 1_000_000)}M`;
  }
  if (absValue >= 1_000) {
    return `${format(value / 1_000)}K`;
  }

  return format(value);
}

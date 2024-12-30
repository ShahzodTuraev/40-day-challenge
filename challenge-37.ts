// 1154. Day of the Year

function dayOfYear(date: string): number {
  const timeArr: number[] = date.split("-").map((ele) => Number(ele));
  const month_days: number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const daysSumm: number =
    month_days.slice(0, timeArr[1] - 1).reduce((a, b) => a + b, 0) + timeArr[2];
  if (timeArr[0] % 100 == 0 && timeArr[0] % 400 !== 0) {
    return daysSumm;
  }
  if (timeArr[0] % 400 == 0 && timeArr[1] > 2) {
    return daysSumm + 1;
  }
  return timeArr[0] % 400 !== 0 && timeArr[0] % 4 == 0 && timeArr[1] > 2
    ? daysSumm + 1
    : daysSumm;
}

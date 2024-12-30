// 539. Minimum Time Difference
function findMinDifference(timePoints: string[]): number {
  const onlyMinList: number[] = timePoints
    .map((ele) => Number(ele.split(":")[0]) * 60 + Number(ele.split(":")[1]))
    .sort((a: any, b: any) => a - b);
  const difList: number[] = onlyMinList.map((ele, index) => {
    if (index < onlyMinList.length - 1) {
      return onlyMinList[index + 1] - ele >= 0
        ? onlyMinList[index + 1] - ele
        : 1440 + onlyMinList[index + 1] - ele;
    } else {
      return onlyMinList[0] - ele >= 0
        ? onlyMinList[0] - ele
        : 1440 + onlyMinList[0] - ele;
    }
  });
  return Math.min(...difList);
}

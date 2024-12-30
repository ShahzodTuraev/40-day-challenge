// 1507. Reformat Date
function reformatDate(date: string): string {
  const month: string[] = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const dayDate: string = date
    .split(" ")[0]
    .split("")
    .filter((ele) => Number.isInteger(Number(ele)))
    .join("");
  const currentMonth: number = month.indexOf(date.split(" ")[1]) + 1;
  return `${date.split(" ")[2]}-${
    currentMonth > 9 ? currentMonth : `0${currentMonth}`
  }-${Number(dayDate) > 9 ? dayDate : `0${dayDate}`}`;
}

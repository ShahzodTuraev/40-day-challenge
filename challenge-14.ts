// 2109. Adding Spaces to a String
function addSpaces(s: string, spaces: number[]): string {
  let readyString: string = "";
  let spaceIndex: number = 0;
  for (let i: number = 0; i < s.length; i++) {
    if (spaces[spaceIndex] === i) {
      readyString += " ";
      spaceIndex++;
    }
    readyString += s[i];
  }
  return readyString;
}

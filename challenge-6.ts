// 1861. Rotating the Box
// masala shartiga ko'ra bizga elementlari *, . va # dan iborat arraylardan topgan array matritsalar berilgan. Ular bir
//qutini ifodalaydi. qutini 90 gradus o'nga yiqitsak arraylar elementlari ham o'zgaradi.
function rotateTheBox(box: string[][]): string[][] {
  let unitCel: string[] = []; // "*" lar orasidagi sortlangan elementlar uchun
  let newColumn: string[] = []; // Rotated box columnlari uchun
  let newBox: string[][] = []; //Rotated box
  // elementlarni sortlaymiz:
  for (let i: number = 0; i < box.length; i++) {
    for (let j: number = 0; j < box[i].length; j++) {
      if (box[i][j] == "#") {
        unitCel.push(box[i][j]);
      } else if (box[i][j] == ".") {
        unitCel.unshift(box[i][j]);
      } else {
        unitCel.push(box[i][j]);
        unitCel.map((ele) => newColumn.push(ele));

        unitCel = [];
      }
      if (j === box[i].length - 1) {
        unitCel.map((ele) => newColumn.push(ele));
        unitCel = [];
      }
    }
    newBox.push(newColumn);
    newColumn = [];
  }
  let rotatedBox: string[][] = [];
  // sortlangan elementlardan tashkil topgan box arrayni rotate qilamiz:
  for (let i: number = 0; i < newBox[0].length; i++) {
    for (let j: number = newBox.length - 1; j >= 0; j--) {
      newColumn.push(newBox[j][i]);
    }
    rotatedBox.push(newColumn);
    newColumn = [];
  }
  return rotatedBox;
}

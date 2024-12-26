// 804. Unique Morse Code Words
function uniqueMorseRepresentations(words: string[]): number {
  const morseCode: string[] = [
    ".-",
    "-...",
    "-.-.",
    "-..",
    ".",
    "..-.",
    "--.",
    "....",
    "..",
    ".---",
    "-.-",
    ".-..",
    "--",
    "-.",
    "---",
    ".--.",
    "--.-",
    ".-.",
    "...",
    "-",
    "..-",
    "...-",
    ".--",
    "-..-",
    "-.--",
    "--..",
  ];
  const alphabetLowercase: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  let comulArr: string[] = [];
  for (let i: number = 0; i < words.length; i++) {
    let morseStr: string = "";
    for (let j: number = 0; j < words[i].length; j++) {
      morseStr += morseCode[alphabetLowercase.indexOf(words[i][j])];
    }
    if (!comulArr.includes(morseStr)) {
      comulArr.push(morseStr);
    }
    morseStr = "";
  }
  return comulArr.length;
}

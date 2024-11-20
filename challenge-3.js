function takeCharacters(s, k) {
  const sortedCharacters = s.split("").sort();
  const uniqueCharacters = [...new Set(sortedCharacters)];
  const sameCharactersAmount = (char) => {
    return sortedCharacters.filter((ele) => ele == char).length;
  };
  if (
    uniqueCharacters.length >= 3 &&
    sameCharactersAmount("a") >= k &&
    sameCharactersAmount("b") >= k &&
    sameCharactersAmount("c") >= k
  ) {
    return true;
  } else {
    return false;
  }
  // return sortedString;
}

console.log(takeCharacters("aabaaaacaabc", 2));

// 1455. Check If a Word Occurs As a Prefix of Any Word in a Sentence
function isPrefixOfWord(sentence: string, searchWord: string): number {
  const splitWords: string[] = sentence.split(" ");
  for (let i: number = 1; i <= splitWords.length; i++) {
    if (splitWords[i - 1].startsWith(searchWord)) {
      return i;
    }
  }
  return -1;
}

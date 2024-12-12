// 2558. Take Gifts From the Richest Pile
function pickGifts(gifts: number[], k: number): number {
  let newGifts: number[] = gifts;
  for (let i: number = 0; i < k; i++) {
    const maxPile: number = Math.max(...newGifts);
    const maxPileIndex: number = newGifts.indexOf(maxPile);
    newGifts[maxPileIndex] = Math.floor(Math.sqrt(maxPile));
  }
  return newGifts.reduce((a: any, b: any) => a + b, 0);
}

function getMinCoins(amount: number, coins: number[]): number {
  let count = 0;
  for (let coin of coins) {
    let use = Math.floor(amount / coin);
    count += use;
    amount -= use * coin;
    if (amount === 0) break;
  }
  return count;
}

export { getMinCoins };

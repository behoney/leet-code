function maxProfit(prices: number[]): number {

  if (prices.length === 1) return 0;

  const diff = [];

  for (let i = 1; i < prices.length; i++) {
    diff.push(prices[i] - prices[i - 1]);
  }
  const profits = diff.filter(e => e > 0);
  if (profits.length === 0) return 0;

  // console.log(profits);

  return profits.reduce((acc, e) => { return acc + e }, 0);

};
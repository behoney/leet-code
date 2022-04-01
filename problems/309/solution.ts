function maxProfit(prices: number[]): number {
  if (prices.length === 1) return 0;

  const diff = []
  for (let i = 1; i < prices.length; i++) {
    const delta = prices[i] - prices[i - 1];

    if (diff.length > 1 && diff[diff.length - 1] >= 0 && delta >= 0) {
      diff[diff.length - 1] += delta;
    }
    else {
      diff.push(delta);
    }
  }

  console.log(diff);

  const profits = diff.filter(e => e > 0);
  if (profits.length === 0) return 0;
  if (profits.length === 1) return profits[0];
  if (profits.length === diff.length) return diff.reduce((acc, e) => acc + e);

  const dp = new Array(diff.length + 1).fill(-Infinity);
  let max = 0;
  for (let i = diff.length - 1; i >= 0; i--) {
    let localMax = 0;

    for (let j = i; j < diff.length; j++) {

      const dpResult = localMax + dp[j + 1];
      const localResult = localMax + diff[j];
      // console.log(dpResult, localResult);

      if (dpResult > localResult) {
        localMax = dpResult;
        break;
      }
      else {
        localMax = localResult
        j++
      }

    }
    // console.log(i, localMax);
    max = Math.max(max, localMax);
    dp[i] = max
  }
  console.log(dp);


  return max;
};
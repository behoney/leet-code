function maximumWealth(accounts: number[][]): number {
  let max = -Infinity;
  for (let i = 0; i < accounts.length; i++)
    max = Math.max(max, accounts[i].reduce((acc, e) => acc + e, 0))
  return max;
};
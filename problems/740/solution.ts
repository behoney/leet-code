function deleteAndEarn(nums: number[]): number {
  nums.sort((a, b) => a - b);
  const dp = {}

  const getMax = (cur: number[], idx) => {
    if (cur.length === 0) return 0;

    const target = cur[idx];

    cur.splice(idx, 1);
    const rem
      = cur.filter(
        e => { return e != target + 1 && e != target - 1 }
      )

    const key = rem.join('');

    // console.log("target", key, rem);
    if (dp[key] === undefined) {
      if (rem.length === 0) return target;
      dp[key] = getMax([...rem], 0);
      for (let i = 1; i < rem.length; i++)
        dp[key] = Math.max(dp[key], getMax([...rem], i))
      return target + dp[key];
    }

    else return target + dp[key]
  }

  let result = -Infinity;
  for (let idx = 0; idx < nums.length; idx++) {
    result = Math.max(result, getMax([...nums], idx))
  }

  return result
};
function deleteAndEarn(nums: number[]): number {
  nums.sort((a, b) => b - a);
  const dp = {}

  const getMax = (cur: number[], idx: number) => {
    if (cur.length === 0) return 0;

    const target = cur[idx];
    cur[idx] += 1;          // cur[idx] will be removed by following filter

    let idxOfSameValue = cur.indexOf(target);
    let acc = 0;

    while (idxOfSameValue > -1) {
      acc += target;
      cur[idxOfSameValue] += 1;
      idxOfSameValue = cur.indexOf(target); // update for same value
    }

    const rem
      = cur.filter(
        e => { return e < target - 1 || e > target + 1 }
      )
    if (rem.length === 0) return target + acc;

    const key = rem.join('');

    // console.log("target", key, rem);
    if (dp[key] === undefined) {
      dp[key] = getMax([...rem], 0);

      for (let i = 1; i < rem.length; i++)
        dp[key] = Math.max(dp[key], getMax([...rem], i))

      return target + acc + dp[key];
    }

    else return target + acc + dp[key]
  }

  let result = -Infinity;

  for (let idx = 0; idx < nums.length; idx++) {
    result = Math.max(result, getMax([...nums], idx))
  }

  return result
};
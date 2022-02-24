function deleteAndEarn(nums: number[]): number {
  nums.sort().reverse();
  const getMax = (cur: number[], idx) => {
    if (cur.length == 0) return 0;

    const target = cur[idx];
    cur.splice(idx, 1);
    const rem = [...cur].filter(e => { return e != target + 1 && e != target - 1 })

    // console.log("target", target, rem);
    if (rem.length == 0) return target;
    return target + Math.max(...rem.map((e, idx) => { return getMax([...rem], idx) }));
  }
  const result: number[] = nums.map((e, idx) => {
    const val = getMax([...nums], idx);
    // console.log(val);
    return val;
  });
  // console.log(result);


  return Math.max(...result);
};
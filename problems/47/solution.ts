function permuteUnique(nums: number[]): number[][] {
  if (!nums) return [[]];
  if (nums.length == 1) return [nums];

  const indexedResult: number[][] = [];

  const getPermutation = (idx: number, cur: number[]) => {
    if (cur.length == nums.length) {
      indexedResult.push(cur);
      return;
    }

    for (let i = 1; i < nums.length; i++) {
      if (!cur.includes((idx + i) % nums.length))
        getPermutation(idx + i, [...cur, (idx + i) % nums.length])
    }
  }

  for (let i = 0; i < nums.length; i++) {
    getPermutation(i, []);
  }


  const result = new Set<string>()

  for (const indexedArr of indexedResult) {
    result.add(JSON.stringify([...(indexedArr.map((idx) => nums[idx]))]))
  }
  // console.log("result", result);
  const numsArr = [...result].map((e) => {
    return JSON.parse(e)
  });
  // console.log("indexedResult", numsArr);


  return numsArr;
};
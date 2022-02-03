function subsetsWithDup(nums: number[]): number[][] {


  if (nums.length == 0) return [[]];

  const set = new Set<string>();
  const indexes = [];
  for (let i = 0; i < nums.length; i++) indexes.push(i);

  const subsetsByIndex = (cur: number[]) => {
    if (cur.length == 0) return;
    // console.log(cur)
    set.add(JSON.stringify(cur));
    if (cur.length == 1) return;
    for (let i = 0; i < cur.length; i++) {
      const next = [...cur];
      next.splice(i, 1)
      subsetsByIndex(next);
    }
  }

  subsetsByIndex(indexes);

  // console.log("set", set)

  // parse again
  const result: number[][] = [...set].map((e: string) => {
    const indexedArr: number[] = JSON.parse(e)
    const targetArr: number[] = []
    // console.log("indexedArr", indexedArr);

    for (const t of indexedArr)
      targetArr.push(nums[t]);

    return targetArr.sort();
  });
  // console.log("result", result);


  //translate index to values from nums
  result.push([])

  //remove again
  const removeDuplicates = (arr: number[][]): number[][] => {
    const set = new Set<string>()
    for (const e of arr) set.add(JSON.stringify(e))
    const result = [...set].map((e: string) => {
      return JSON.parse(e);
    })

    return result;
  }

  return removeDuplicates(result);
};
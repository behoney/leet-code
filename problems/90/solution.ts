function subsetsWithDup(nums: number[]): number[][] {


  if (nums.length == 0) return [[]];

  const set = new Set<string>();
  const indexes = [];
  for (let i = 0; i < nums.length; i++) indexes.push(i);

  const subsetsByIndex = (cur: number[]) => {
    if (cur.length == 0) return;
    set.add(JSON.stringify(cur));
    if (cur.length == 1) return;
    for (let i = 0; i < cur.length; i++) {
      const next = [...cur];
      next.splice(i, 1)
      subsetsByIndex(next);
    }
  }

  subsetsByIndex(nums);


  // parse again

  //translate index to values from nums

  return [[]];


};
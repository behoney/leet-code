function subsets(nums: number[]): number[][] {
  if (nums.length == 0) return [[]];
  const set = new Set<string>();

  const getAllSubsets = (cur: number[]) => {
    // console.log(cur);
    if (cur.length == 0) return;

    set.add(JSON.stringify(cur))
    if (cur.length == 1) return;

    for (let i = 0; i < cur.length; i++) {
      const temp = [...cur];
      temp.splice(i, 1);
      getAllSubsets(temp);
    }
  }


  getAllSubsets(nums);
  const arr = [...set].map((e) => JSON.parse(e));
  arr.push([])
  return arr;
};
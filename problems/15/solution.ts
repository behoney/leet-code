function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];

  nums.sort((a, b) => a - b)
  const result = new Set<string>();
  const obj = {
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (obj[-(nums[i] + nums[j])] == undefined)
        obj[-(nums[i] + nums[j])] = [[i, j]]
      else {
        obj[-(nums[i] + nums[j])].push([i, j])
      }
    }
  }
  // console.log(obj);

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] != undefined) {
      obj[nums[i]].map(e => {
        if (!e.includes(i)) {

          // console.log([...e, i]);

          result.add(JSON.stringify([...e.map(v => nums[v]), nums[i]].sort()))
        }
      })
    }
  }


  return [...result].map(e => JSON.parse(e));
}

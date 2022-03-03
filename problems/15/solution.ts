function threeSum(nums: number[]): number[][] {
  if (nums.length < 3) return [];
  nums.sort((a, b) => a - b)

  const max = nums[nums.length - 1];
  const min = nums[0];

  const result = new Set<string>();
  const obj = {
  }
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const target = -(nums[i] + nums[j]);

      if (target > max || target < min) continue;

      if (obj[target] == undefined)
        obj[target] = [[i, j]]
      else {
        obj[target].push([i, j])
      }
    }
  }

  console.log(obj);

  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]] != undefined) {
      obj[nums[i]].map(e => {
        if (!e.includes(i)) {
          // console.log([...e, i]);
          result.add(JSON.stringify([nums[e[0]], nums[e[1]], nums[i]].sort()))
        }
      })
    }
  }


  return [...result].map(e => JSON.parse(e));
}

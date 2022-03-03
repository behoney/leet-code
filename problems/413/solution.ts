function numberOfArithmeticSlices(nums: number[]): number {
  if (nums.length < 3) return 0;
  nums.sort((a, b) => a - b);

  const min = nums[0];
  const max = nums[nums.length - 1];

  let result = 0;
  const obj = {}
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      const nextValue = nums[j] + (nums[j] - nums[i]);

      if (nextValue < min || nextValue > max) continue;

      if (obj[nextValue] === undefined) obj[nextValue] = [[i, j]];
      else obj[nextValue].push([i, j])
    }
  }

  // console.log(obj);

  const test = new Set();

  let lastResult = -Infinity;

  while (lastResult != result) {
    lastResult = result;
    for (let i = 0; i < nums.length; i++) {
      if (obj[nums[i]] != undefined) {

        const current = nums[i];

        obj[current].map((e: number[]) => {
          if (e.includes(i)) return;
          if (e[e.length - 1] == i - 1 || e[e.length - 1] == i + 1)
            result++;
          const last = nums[e[e.length - 1]];
          const next = current + (current - last)

          if (obj[next] === undefined) obj[next] = [...e, i]
          else obj[next].push([...e, i]);

          test.add(JSON.stringify([...e.map(t => nums[t]), nums[i]]))
        })
        delete obj[current]
      }
    }
  }

  console.log(result, test);

  return result;
};
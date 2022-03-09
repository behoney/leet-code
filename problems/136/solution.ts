function singleNumber(nums: number[]): number {
  const obj = {};
  while (nums.length) {
    const target = nums.shift();
    if (obj[target] === undefined) {
      obj[target] = true;
    } else delete obj[target]
  }
  // console.log(obj);
  return parseInt(Object.keys(obj)[0]);
}

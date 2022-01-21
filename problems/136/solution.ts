function singleNumber(nums: number[]): number {
  const t = [];
  while (nums.length) {
    const target = nums.shift();
    if (t.indexOf(target) != -1) {
      t.splice(t.indexOf(target), 1);
    } else t.push(target);
  }

  return t[0];
}

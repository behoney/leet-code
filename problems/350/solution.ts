function intersect(nums1: number[], nums2: number[]): number[] {
  const bigger = nums1.length >= nums2.length ? nums1 : nums2;
  bigger.sort((a, b) => a - b);
  const smaller = nums1.length >= nums2.length ? nums2 : nums1;
  smaller.sort((a, b) => a - b);
  const result = [];
  for (const e of smaller) {
    if (bigger.indexOf(e) != -1) {
      bigger.splice(bigger.indexOf(e), 1);
      result.push(e);
    }
  }

  return result;
}

/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  if (m == 0 && n == 0) {
    nums1.length = 0;
    return;
  }
  const result = [...nums1.slice(0, m), ...nums2.slice(0, n)];
  result.sort((a, b) => a - b);
  nums1.length = 0;
  nums1.push(...result);
}

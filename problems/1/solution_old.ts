// [2,5,5,11]
// 10

function twoSum(nums: number[], target: number): number[] {
  if (nums.length == 2) return [0, 1];

  const flatArr = [...nums];
  flatArr.sort((a, b) => a - b);

  let lower = 0,
    upper = flatArr.length - 1;

  while (lower != upper) {
    const result = flatArr[lower] + flatArr[upper];
    if (result == target)
      return [
        nums.indexOf(flatArr[lower]),
        flatArr[lower] == flatArr[upper]
          ? nums.indexOf(flatArr[upper], nums.indexOf(flatArr[lower]) + 1)
          : nums.indexOf(flatArr[upper]),
      ];

    if (result < target) lower++;
    else if (result > target) upper--;
  }

  return [
    nums.indexOf(flatArr[lower]),
    nums.indexOf(flatArr[lower], nums.indexOf(flatArr[lower]) + 1),
  ];
}

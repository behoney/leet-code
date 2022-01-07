/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

const tightenArr = (arr) => {
  let prev = arr[0];
  const result = [prev];
  for (let i = 1; i < arr.length; i++) {
    if (prev != arr[i]) {
      result.push(arr[i]);
      prev = arr[i];
    }
  }
  return result;
};

var twoSum = function (numbers, target) {
  let pivot = 0;
  const tightened = tightenArr(numbers);
  while (pivot <= tightened.length) {
    const sumArr = tightened.map((e) => e + tightened[pivot] == target);
    const t = sumArr.indexOf(true);
    if (t >= 0) {
      const m = numbers.indexOf(tightened[pivot]);
      let n = numbers.indexOf(tightened[t]);
      if (m == n) n +=1;

      return m > n ? [n + 1, m + 1] : [m + 1, n + 1];
    }
    pivot++;
  }

  return [];
};

console.log(
  twoSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 5)
);
console.log(
  twoSum([0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9], 0)
);
console.log(twoSum([1, 2, 3, 4, 4, 9, 56, 90], 8));


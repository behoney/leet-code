function twoSum(numbers: number[], target: number): number[] {
  if (numbers.length == 2) return [1, 2];

  const set = new Set(numbers);
  const arr = Array.from(set);
  const rem = [];

  for (const m of arr) {
    const targetIndex = numbers.indexOf(m);
    if (numbers[targetIndex] == numbers[targetIndex + 1]) {
      rem.push(numbers[targetIndex]);
    }
  }
  arr.push(...rem);

  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] == target)
        return arr[i] == arr[j]
          ? [numbers.indexOf(arr[i]) + 1, numbers.indexOf(arr[i]) + 2]
          : [numbers.indexOf(arr[i]) + 1, numbers.indexOf(arr[j]) + 1];
    }
  }

  return [-Infinity, Infinity]; // wrong test case
}

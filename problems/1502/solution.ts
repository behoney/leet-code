function canMakeArithmeticProgression(arr: number[]): boolean {
  arr.sort((a, b) => a - b)
  const diff = arr[1] - arr[0];
  for (let i = 1; i < arr.length - 1; i++) {
    if (diff !== arr[i + 1] - arr[i]) return false;
  }

  return true;
};
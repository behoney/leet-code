function sumOddLengthSubarrays(arr: number[]): number {
  let result = 0;

  for (let i = 0; i < arr.length; i++) {
    let idx = i;
    const subarr = [arr[idx]]
    while (idx < arr.length) {
      if ((subarr.length & 1) === 1)
        result += subarr.reduce((acc, e) => acc + e)
      idx++;
      subarr.push(arr[idx]);
    }
  }

  return result;
};
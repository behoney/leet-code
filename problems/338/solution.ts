function countBits(n: number): number[] {
  const result = []
  for (let i = 0; i <= n; i++) {
    const bin = i.toString(2);
    result.push(bin.split('').filter(e => e == '1').length);
  }
  return result;
};
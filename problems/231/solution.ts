function isPowerOfTwo(n: number): boolean {
  if (n <= 0) return false;

  for (let i = 0; i < 32; i++) {
    if (Math.pow(2, i) == n) return true;
  }
  return false;
}

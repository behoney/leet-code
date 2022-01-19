function climbStairs(n: number): number {
  if (n <= 2) return n;
  let prev = 2,
    prev2 = 1,
    res;
  for (let i = 3; i <= n; i++) {
    res = prev + prev2;
    prev2 = prev;
    prev = res;
  }
  return res;
}

// 1 1 1 1 1 1
// (1 1) (1 1) 1  1
// 1 (1 1) 1 1 1
// 1 1 (1 1) 1 1
// 1 1 1 (1 1) 1
// 1 1 1 1 (1 1)

// (1 1) (1 1)

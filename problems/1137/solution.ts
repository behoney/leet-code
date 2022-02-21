function tribonacci(n: number): number {
  if (n == 0) return 0;
  if (n <= 2) return 1;

  const list = [0, 1, 1];

  let result = 0, cnt = 0;

  for (let i = 0; i < n - 2; i++) {
    result = list[0] + list[1] + list[2]

    list[cnt++] = result
    if (cnt == 3) cnt = 0;
  }


  return result;
};
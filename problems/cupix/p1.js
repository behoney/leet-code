function solution(n) {
  if (n == 1) return [0, 1];
  else if (n <= 5) return [0, 2];

  const result = [0, 0];
  const rem = (n % 7) - 5;
  const rem2 = ((n - 2) % 7) - 5;

  // 월요일 부터 시작함
  result[0] = Math.floor(n / 7) * 2 + (rem >= 0 ? rem : 0);

  // 토요일 부터 시작함
  result[1] = Math.floor((n - 2) / 7) * 2 + (rem2 >= 0 ? rem2 + 2 : 2);

  console.log(result);
  return result;
}

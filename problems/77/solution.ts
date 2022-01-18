function combine(n: number, k: number): number[][] {
  if (n == 1 && k == 1) return [[1]];

  const result = [];

  const dfs = (current, start) => {
    if (current.length == k) {
      result.push(current);
    }

    if (current.length < k) {
      for (let i = start; i <= n; i++) {
        dfs([...current, i], i + 1);
      }
    }
  };

  dfs([], 1);

  return result;
}

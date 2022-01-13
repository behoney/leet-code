function lengthOfLongestSubstring(s: string): number {
  if (!s) return 0;
  const sub = {};
  let rem = 0;
  return s.split("").reduce((max, v, i) => {
    rem = sub[v] >= rem ? sub[v] + 1 : rem;
    sub[v] = i;
    return Math.max(max, i - rem + 1);
  }, 0);
}

function isSubsequence(s: string, t: string): boolean {
  if (s.length == 0) return true;
  if (t.length == 0) return s.length == 0;

  let target = s.split('');
  for (let i = 0; i < t.length; i++) {
    if (target.length == 0) break;
    if (target[0] === t[i]) {
      target.shift();
    }
  }

  return target.length == 0;
};
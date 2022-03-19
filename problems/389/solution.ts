function findTheDifference(s: string, t: string): string {
  const obj = {};
  for (let i = 0; i < s.length; i++) {
    const key = s[i];
    if (obj[key] === undefined) obj[key] = 1;
    else obj[key]++;
  }

  for (let i = 0; i < t.length; i++) {
    const key = t[i];
    if (obj[key] === undefined || obj[key] === 0) return key;
    else obj[key]--;
  }

  return ""
};
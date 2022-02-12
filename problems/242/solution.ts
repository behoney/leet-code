function isAnagram(s: string, t: string): boolean {
  if (s.length != t.length) return false;

  const obj = {}
  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] == undefined)
      obj[s[i]] = 1
    else
      obj[s[i]] += 1
  }
  for (let i = 0; i < t.length; i++) {
    if (obj[t[i]] == undefined)
      return false;
    else {
      obj[t[i]] -= 1;
      if (obj[t[i]] == 0) delete obj[t[i]]
    }
  }
  return true;

}

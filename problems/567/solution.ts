function checkInclusion(s1: string, s2: string): boolean {
  if (s1 == s2) return true;
  if (s1.length > s2.length) return false;

  const set1 = new Set(s1.split(""));
  const set2 = new Set(s2.split(""));
  for (const c of set1) {
    if (set2.has(c)) set1.delete(c);
  }

  const test = s1.split("").sort().join();
  for (let i = 0; i <= s2.length - s1.length; i++) {
    const rem = s2
      .substring(i, i + s1.length)
      .split("")
      .sort();
    console.log(rem.join(), test);
    if (rem.join() == test) return true;
  }

  return false;
}

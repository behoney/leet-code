function areAlmostEqual(s1: string, s2: string): boolean {
  if (s1 === s2) return true;
  if (s1.length !== s2.length) return false;

  const s1Indexes = []
  for (let i = 0; i < s1.length; i++) {
    if (s1[i] !== s2[i]) {
      s1Indexes.push(i)
    }
  }

  if (s1Indexes.length !== 2) return false;

  return (s1[s1Indexes[0]] === s2[s1Indexes[1]]) &&
    (s1[s1Indexes[1]] === s2[s1Indexes[0]]);
};
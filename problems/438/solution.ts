function findAnagrams(s: string, p: string): number[] {
  const window = p.length;
  const target = p.split('').sort().join('');
  const result = [];
  for (let i = 0; i < s.length; i++) {
    if (s.split('').slice(i, i + window).sort().join('') == target) {
      result.push(i);
    }
  }

  return result;

};
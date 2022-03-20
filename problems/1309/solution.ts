const charMap = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
]
function freqAlphabets(s: string): string {
  for (let i = 10; i <= 26; i++) {
    const target = i.toString() + "#";
    while (s.includes(target)) {
      s = s.replace(target, charMap[i - 1])
    }
  }
  for (let i = 1; i <= 9; i++) {
    const target = i.toString();
    while (s.includes(target)) {
      s = s.replace(target, charMap[i - 1])
    }
  }
  return s;
};
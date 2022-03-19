function mergeAlternately(word1: string, word2: string): string {
  const longer = word1.length >= word2.length ? word1 : word2;
  const shorter = longer === word1 ? word2 : word1;
  let result = "";
  let i = 0;
  for (; i < shorter.length; i++) {
    result += word1[i]
    result += word2[i]
  }
  const rem = longer === word1 ? word1 : word2;
  while (i < longer.length)
    result += rem[i++]

  return result;
};
function letterCasePermutation(s: string): string[] {
  //if all is number
  const letters = s.toLowerCase().split("");
  if (letters.every((c) => !isLetter(c))) return [s];

  const result: string[] = [];

  for (let i = 0; i < letters.length; i++) {
    if (isLetter(letters[i])) {
      const newCase: string[] = [];
      newCase.push(...getAllCase(s.toLowerCase(), i));
      result.forEach((e) => {
        newCase.push(...getAllCase(e, i));
      });
      console.log("newCase", newCase);
      result.push(...newCase);
    }
  }
  const test = new Set(result);
  return Array.from(test);
}

const isLetter = (c: string): boolean => {
  return !("0" <= c && c <= "9");
};

const getAllCase = (str: string, idx: number): string[] => {
  const newCase = str.split("");
  newCase[idx] = newCase[idx].toUpperCase();
  console.log("getAllCase", [str, newCase.join("")]);
  return [str, newCase.join("")];
};

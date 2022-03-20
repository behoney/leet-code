function isAlienSorted(words: string[], order: string): boolean {


  if (words.length === 1) return true;

  const compareTwo = (first, second) => {
    for (let i = 0; i < first.length; i++) {
      if (second[i] === undefined) return false;

      const firstOrder = order.indexOf(first[i]);
      const secondOrder = order.indexOf(second[i]);
      if (firstOrder < secondOrder) {
        return true;
      }
      if (firstOrder > secondOrder)
        return false;
    }
    return true;
  }

  let result = true;

  for (let i = 0; (i < words.length) && result; i++) {
    for (let j = i + 1; (j < words.length) && result; j++) {
      result = compareTwo(words[i], words[j]);
    }
  }



  return result;
};
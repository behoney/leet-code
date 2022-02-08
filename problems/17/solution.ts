const letters =
{
  "2": ['a', 'b', 'c'],
  "3": ['d', 'e', 'f'],
  "4": ['g', 'h', 'i'],
  "5": ['j', 'k', 'l'],
  "6": ['m', 'n', 'o'],
  "7": ['p', 'q', 'r', 's'],
  "8": ['t', 'u', 'v'],
  "9": ['w', 'x', 'y', 'z'],
}

//                          "23"
function letterCombinations(digits: string): string[] {
  if (digits.length == 0) return [];
  if (digits.length == 1) return [...letters[digits[0]]];
  // [2,3]
  const eachDigits = digits.split('');
  const digitCombination = []
  //        2               a,b,c    
  letters[eachDigits.shift()].map(e => {
    digitCombination.push(e)
  })
  // 3
  for (const digit of eachDigits) {
    // 3
    const temp = [];

    // a              a,b,c
    for (const target of digitCombination) {
      // d e f
      letters[digit].map(e => {
        // a + d e f
        temp.push(target + e)
      })
    }
    digitCombination.length = 0;
    digitCombination.push(...temp)
  }

  return digitCombination;


};
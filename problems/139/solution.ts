// "aaaaaaa"
// ["aaaa","aa"]

// "dd / ad / dd / b / dd / da / dd"
// ["dd","ad","da","b"]

function wordBreak(s: string, wordDict: string[]): boolean {
  let segmentChecker = false;
  for (let i = 0; (i < wordDict.length) && !segmentChecker; i++) {
    segmentChecker = segmentChecker || s.includes(wordDict[i]);
  }
  if (!segmentChecker) return false;

  wordDict.sort();

  let result = new Array(s.length).fill(false);
  result.push(true);

  for (let i = s.length; i >= 0; i--) {
    for (const e of wordDict) {
      if (s.length - i >= e.length && e === s.substring(i, i + e.length))
        result[i] = result[i + e.length];
      if (result[i]) break;
    }
  }

  // for (let i = 0; (i < wordDict.length); i++) {
  //   if (wordDict[i].length === 2) {
  //     const target = wordDict[i][1] + wordDict[i][0];
  //     if (wordDict.includes(target)) {
  //       wordDict[i] = target[0];
  //       wordDict[wordDict.indexOf(target)] = target[1];
  //     }
  //   }
  // }

  // const testset = wordDict.sort().reverse();

  // for (let i = 0; i < testset.length; i++) {
  //   let str = s;
  //   for (let j = 0; j < testset.length; j++) {
  //     const target = testset[(i + j) % testset.length];
  //     // console.log(str, "<", target);
  //     while (str.includes(target))
  //       str = str.replace(target, target.toUpperCase())
  //   }
  //   // console.log(str);

  //   if (str === str.toUpperCase()) return true;
  // }

  return result[0];
};
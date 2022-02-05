function combinationSum(candidates: number[], target: number): number[][] {
  if (!candidates) return [];
  // if (candidates.length == 1) return candidates[0] == target ? [candidates] : []

  candidates.sort();

  const resultInIdx = new Set<string>();

  const getCombination = (idx: number, current: number[]) => {
    let val = 0;
    if (current.length > 0) {

      val = current.length == 1 ? candidates[current[0]] : current.reduce((acc, cur) => {
        return acc + candidates[cur]
      }, 0);

      // console.log(idx, val, current);


      if (val == target) {
        // console.log("added", current);
        resultInIdx.add(JSON.stringify(current.sort()));
      }
      else if (val > target) return;
    }

    for (let i = 0; i < candidates.length; i++) {
      if (val + (idx + i) % candidates.length <= target)
        getCombination(idx + i, [...current, (idx + i) % candidates.length]);
    }
  }

  for (let i = 0; i < candidates.length; i++) {
    getCombination(i, []);
  }

  return [...resultInIdx].map(e => JSON.parse(e)).map(e => {
    const result = [];
    for (const v of e) result.push(candidates[v])
    return result;
  });
};
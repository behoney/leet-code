function combinationSum2(candidates: number[], target: number): number[][] {
  if (!candidates) return [];
  // if (candidates.length == 1) return candidates[0] == target ? [candidates] : []

  candidates.sort();

  const resultSet = new Set<string>();
  const addToSet = (e: number[]) => resultSet.add(JSON.stringify(e));

  const getCombination = (idx: number, current: number[]) => {
    if(idx == candidates.length) return;
    // if(idx == candidates.length) return;
    
  }

};
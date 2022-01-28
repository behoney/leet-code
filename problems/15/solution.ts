function threeSum(nums: number[]): number[][] {
  const numbers = [...nums].sort((a, b) => a - b);
  const indexedResults = [];

  if (numbers.length < 3) return indexedResults;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = i + 1; j < numbers.length; j++) {
      const target = numbers[i] + numbers[j];
      const test = [...numbers].map((e) => e + target);
      for (let k = j + 1; k < test.length; k++) {
        if (test[k] == 0 && k != i && k != j) {
          const sortedArr = [i, j, k];
          sortedArr.sort((a, b) => a - b);
          indexedResults.push(sortedArr);
        }
      }
    }
  }

  const result = [...new Set(indexedResults.map((e) => e.join()))]
    .map((e) => e.split(","))
    .map((e) => {
      const arr = [];
      for (const v of e) {
        arr.push(numbers[v]);
      }
      return arr;
    });

  const removeDup = (arr: number[][]) => {
    const test = [...arr].map((e) => e.sort()).map((e) => e.join());
    const trav = [];
    const IndexNeedToRemove = [];

    for (let i = 0; i < test.length; i++) {
      if (trav.indexOf(test[i]) == -1) trav.push(test[i]);
      else IndexNeedToRemove.push(i);
    }
    while (IndexNeedToRemove.length > 0) {
      arr[IndexNeedToRemove.pop()] = [];
    }
  };

  removeDup(result);

  return result.filter((e) => e.length == 3);
}

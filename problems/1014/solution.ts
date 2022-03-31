function maxScoreSightseeingPair(values: number[]): number {

  const getScore = (i, j) => {
    const dist = i - j;
    return values[i] + values[j] + dist;
  };

  if (values.length === 2) return getScore(0, 1);

  let result = -Infinity;

  for (let i = 0; i < values.length; i++) {
    for (let j = i + 1; j < values.length; j++) {
      result = Math.max(result, getScore(i, j))
    }
  }

  return result;
};
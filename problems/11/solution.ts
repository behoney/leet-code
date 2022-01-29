function maxArea(height: number[]): number {
  let result = -Infinity;

  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      const area = (j - i) * Math.min(height[i], height[j]);
      result = Math.max(result, area);
    }
  }

  return result;
}

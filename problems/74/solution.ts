function searchMatrix(matrix: number[][], target: number): boolean {
  return matrix.flat().indexOf(target) != -1;

  const targetRow = matrix.filter((e: number[]) => {
    return e[0] <= target && e[e.length - 1] >= target;
  });
  if (targetRow.length != 1) console.error("wrong input; ");

  return targetRow[0]?.indexOf(target) != -1;
}

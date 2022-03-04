function getRow(rowIndex: number): number[] {
  return generate(rowIndex + 1).pop();
};

function generate(numRows: number): number[][] {
  if (numRows == 1) return [[1]];
  if (numRows == 2) return [[1], [1, 1]];

  const result: number[][] = [];

  // result.push([1]);

  while (result.length <= numRows) {
    const temp = [];

    const prevRow = [...result].pop();
    while (temp.length < result.length) {
      if (temp.length == 0 || temp.length == result.length - 1) {
        temp.push(1);
      } else {
        temp.push(prevRow[temp.length - 1] + prevRow[temp.length]);
      }
    }
    result.push(temp);
  }
  result.shift();

  return result;
}


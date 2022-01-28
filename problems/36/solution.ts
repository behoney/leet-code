const checkNine = (arr) => {
  let result = true;
  const rep = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == ".") continue;
    if (rep.indexOf(arr[i]) != -1) {
      result = false;
    }
    rep.push(arr[i]);
  }

  return result;
};

function isValidSudoku(board: string[][]): boolean {
  const colCheck = (num = 0) => {
    if (num >= 9) return true;
    const targets = [];
    for (let i = 0; i < 9; i++) {
      targets.push(board[num][i]);
    }

    return checkNine(targets.flat()) && colCheck(num + 1);
  };

  const rawCheck = (num = 0) => {
    if (num >= 9) return true;
    const targets = [];
    for (let i = 0; i < 9; i++) {
      targets.push(board[i][num]);
    }

    return checkNine(targets.flat()) && rawCheck(num + 1);
  };

  const subBoxCheck = (num = 0) => {
    const flat = board.flat();
    if (num >= 9) return true;

    const targets = [];
    for (let i = 0; i < 9; i++) {
      targets.push(flat[subBoxes[num][i]]);
    }

    return checkNine(targets.flat()) && subBoxCheck(num + 1);
  };

  return colCheck() && rawCheck() && subBoxCheck();
}

const subBoxes = [
  [0,1,2,0+9,1+9,2+9,0+18,1+18,2+18],
  [3,4,5,3+9,4+9,5+9,3+18,4+18,5+18],
  [6,7,8,6+9,7+9,8+9,6+18,7+18,8+18],
  [27+0,27+1,27+2,27+0+9,27+1+9,27+2+9,27+0+18,27+1+18,27+2+18],
  [27+3,27+4,27+5,27+3+9,27+4+9,27+5+9,27+3+18,27+4+18,27+5+18],
  [27+6,27+7,27+8,27+6+9,27+7+9,27+8+9,27+6+18,27+7+18,27+8+18],
  [54+0,54+1,54+2,54+0+9,54+1+9,54+2+9,54+0+18,54+1+18,54+2+18],
  [54+3,54+4,54+5,54+3+9,54+4+9,54+5+9,54+3+18,54+4+18,54+5+18],
  [54+6,54+7,54+8,54+6+9,54+7+9,54+8+9,54+6+18,54+7+18,54+8+18]
]
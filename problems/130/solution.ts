/**
 Do not return anything, modify board in-place instead.
 */
function solve(board: string[][]): void {
  if (board.length == 1 && board[0].length == 1) return;
  if (board.flat().every(e => e == "X")) return;
  if (board.flat().every(e => e == "O")) return;

  const maxRow = board.length;
  const maxCol = board[0].length;

  const isAbleToVisit = (i, j) => {
    return board[i][j] == "O" || board[i][j] == "!"
  }

  const checkAdjacent = (i, j) => {
    board[i][j] = "-";
    if (i == 0 || j == 0 || i == maxRow - 1 || j == maxCol - 1) return true;
    let result = false;
    if (j > 0 && isAbleToVisit(i, j - 1)) result = result || checkAdjacent(i, j - 1);
    if (i < maxRow - 1 && isAbleToVisit(i + 1, j)) result = result || checkAdjacent(i + 1, j);
    if (i > 0 && isAbleToVisit(i - 1, j)) result = result || checkAdjacent(i - 1, j);
    if (j < maxCol - 1 && isAbleToVisit(i, j + 1)) result = result || checkAdjacent(i, j + 1);
    return result;
  }

  const updateBoard = (newVal = "", target = "-") => {
    for (let i = 0; i < maxRow; i++) {
      for (let j = 0; j < maxCol; j++) {
        if (board[i][j] == target) board[i][j] = newVal
      }
    }
  }

  for (let i = 0; i < maxRow; i++) {
    for (let j = 0; j < maxCol; j++) {
      if (board[i][j] === "O") {
        if (checkAdjacent(i, j)) {
          updateBoard("!");
        }
        else {
          updateBoard("X");
        }
      }
    }
  }
  updateBoard("O", "!");
  return;
};


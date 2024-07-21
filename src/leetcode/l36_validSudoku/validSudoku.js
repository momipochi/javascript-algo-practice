// https://leetcode.com/problems/valid-sudoku/description/?envType=study-plan-v2&envId=top-interview-150

const validSudoku = (board = [[]]) => {
  for (let i = 0; i < board.length; i++) {
    if (!isLineValid(board[i])) {
      return false;
    }
  }
  for (let i = 0; i < board.length; i++) {
    const tmp = [];
    for (let j = 0; j < board.length; j++) {
      tmp.push(board[j][i]);
    }
    if (!isLineValid(tmp)) {
      return false;
    }
  }

  for (let i = 0; i < board.length; i += 3) {
    for (let j = 0; j < board.length; j += 3) {
      const tmp = [];
      for (let row = i; row < i + 3; row++) {
        const t = [];
        for (let col = j; col < j + 3; col++) {
          t.push(board[row][col]);
        }
        tmp.push(t);
      }

      if (!isCubeValid(tmp)) {
        return false;
      }
    }
  }

  return true;
};

const isLineValid = (arr = []) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === ".") {
      continue;
    }
    if (map[arr[i]]) {
      return false;
    }
    map[arr[i]] = {};
  }
  return true;
};

const isCubeValid = (arr = [[]]) => {
  let map = {};
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      if (arr[i][j] === ".") {
        continue;
      }
      if (map[arr[i][j]]) {
        return false;
      }
      map[arr[i][j]] = {};
    }
  }
  return true;
};

module.exports = { validSudoku };

/*
 * @lc app=leetcode.cn id=37 lang=javascript
 *
 * [37] 解数独
 */

// @lc code=start
function isValid (board, row, col, val) {
  for (var i = 0; i < 9; i++) {
    if (board[i][col] === val || board[row][i] === val) {
      return false;
    }
  }
  var startRow = Math.floor(row / 3) * 3;
  var startCol = Math.floor(col / 3) * 3;
  for (var j = 0; j < 3; j++) {
    for (var k = 0; k < 3; k++) {
      if (board[startRow + j][startCol + k] === val) {
        return false;
      }
    }
  }
  return true;
}

function toFill (board, row, col) {
  if (row >= 9) {
    return true;
  }

  if (col >= 9) {
    return toFill(board, row + 1, 0);
  }

  if (board[row][col] === '.') {
    for (var k = 1; k <= 9; k++) {
      var val = k.toString();
      if (isValid(board, row, col, val)) {
        board[row][col] = val;
        if (toFill(board, row, col + 1)) {
          return true;
        }
        board[row][col] = '.';
      }
    }
    return false;
  }

  return toFill(board, row, col + 1);
}
/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var solveSudoku = function(board) {
  toFill(board, 0, 0);
};
// @lc code=end

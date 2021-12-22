/*
 * @lc app=leetcode.cn id=79 lang=javascript
 *
 * [79] 单词搜索
 */

// @lc code=start
function backtrack (board, row, col, temp, word) {
  if (row < 0 || row >= board.length || col < 0 || col >= board[row].length) {
    return false;
  }
  if (!temp[row + '-' + col] && board[row][col] === word[temp.length]) {
    temp[row + '-' + col] = true;
    temp.length += 1;
    if (temp.length === word.length) {
      return true;
    }
    var result = backtrack(board, row - 1, col, temp, word)
    || backtrack(board, row, col + 1, temp, word)
    || backtrack(board, row + 1, col, temp, word)
    || backtrack(board, row, col - 1, temp, word)
    temp[row + '-' + col] = false;
    temp.length -= 1;
    return result;
  }
  return false;
}
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++) {
      if (backtrack(board, i, j, { length: 0 }, word)) {
        return true;
      }
    }
  }
  return false;
};
// @lc code=end

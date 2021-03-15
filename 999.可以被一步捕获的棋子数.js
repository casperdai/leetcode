/*
 * @lc app=leetcode.cn id=999 lang=javascript
 *
 * [999] 可以被一步捕获的棋子数
 */

// @lc code=start
/**
 * @param {character[][]} board
 * @return {number}
 */
var numRookCaptures = function(board) {
  var x = 0
  var y = 0
  search: for (var i = 0; i < 8; i++) {
    for (var j = 0; j < 8; j++) {
      if (board[i][j] === 'R') {
        x = i
        y = j
        break search
      }
    }
  }
  var dx = [0, 0, 1, -1]
  var dy = [1, -1, 0, 0]
  var count = 0
  for (var i = 0; i < 4; i++) {
    var tx = x + dx[i]
    var ty = y + dy[i]
    while (tx >= 0 && tx < 8 && ty >= 0 && ty < 8) {
      if (board[tx][ty] === '.') {
        tx += dx[i]
        ty += dy[i]
      } else {
        if (board[tx][ty] === 'p') {
          count += 1
        }
        break
      }
    }
  }
  return count
};
// @lc code=end

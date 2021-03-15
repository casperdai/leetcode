/*
 * @lc app=leetcode.cn id=1275 lang=javascript
 *
 * [1275] 找出井字棋的获胜者
 */

// @lc code=start
/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function(moves) {
  if (moves.length < 5) {
    return 'Pending'
  }

  var steps = {}
  for (var i = moves.length - 1; i >= 0; i -= 2) {
    steps[moves[i][0] * 3 + moves[i][1]]= true
  }

  var [r, c] = moves[moves.length - 1]
  if (steps[r * 3] && steps[r * 3 + 1] && steps[r * 3 + 2]) {
    return moves.length % 2 === 1 ? 'A' : 'B'
  }

  if (steps[c] && steps[c + 3] && steps[c + 6]) {
    return moves.length % 2 === 1 ? 'A' : 'B'
  }

  if ((r + c) % 2 === 0 && steps[4] && (steps[0] && steps[8] || steps[2] && steps[6])) {
    return moves.length % 2 === 1 ? 'A' : 'B'
  }

  return moves.length === 9 ? 'Draw' : 'Pending'
};
// @lc code=end

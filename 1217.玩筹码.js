/*
 * @lc app=leetcode.cn id=1217 lang=javascript
 *
 * [1217] 玩筹码
 */

// @lc code=start
/**
 * @param {number[]} position
 * @return {number}
 */
var minCostToMoveChips = function(position) {
  var d = 0
  var s = 0
  for (var i = 0; i < position.length; i++) {
    if (position[i] % 2 === 0) {
      d += 1
    } else {
      s += 1
    }
  }
  return Math.min(d, s)
};
// @lc code=end

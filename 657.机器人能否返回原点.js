/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
  var map = {
    U: 0,
    R: 0,
    D: 0,
    L: 0
  }
  for (var i = 0; i < moves.length; i++) {
    map[moves[i]] += 1
  }
  return map.U === map.D && map.R === map.L
};
// @lc code=end

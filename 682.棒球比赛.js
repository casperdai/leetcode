/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
  var total = []
  for (var i = 0; i < ops.length; i++) {
    switch (ops[i]) {
      case '+':
        total.push(total[total.length - 1] + total[total.length - 2])
        break
      case 'C':
        total.pop()
        continue
      case 'D':
        total.push(total[total.length - 1] * 2)
        break
      default:
        total.push(Number(ops[i]))
        break
    }
  }
  return total.reduce((curr, val) => curr + val, 0)
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
var maxCount = function(m, n, ops) {
  var rmin = m
  var cmin = n
  for (var i = 0; i < ops.length; i++) {
    rmin = Math.min(ops[i][0], rmin)
    cmin = Math.min(ops[i][1], cmin)
  }
  return rmin * cmin
};
// @lc code=end

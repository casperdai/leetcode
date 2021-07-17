/*
 * @lc app=leetcode.cn id=1716 lang=javascript
 *
 * [1716] 计算力扣银行的钱
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var totalMoney = function(n) {
  var r = Math.floor(n / 7)
  var mod = n % 7
  return r * 28 + (7 * r * (r - 1) / 2) + r * mod + (mod * (1 + mod) / 2)
};
// @lc code=end

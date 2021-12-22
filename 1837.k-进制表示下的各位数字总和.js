/*
 * @lc app=leetcode.cn id=1837 lang=javascript
 *
 * [1837] K 进制表示下的各位数字总和
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var sumBase = function(n, k) {
  var total = 0
  while (n >= k) {
    total += n % k
    n = Math.floor(n / k)
  }
  return total + n
};
// @lc code=end

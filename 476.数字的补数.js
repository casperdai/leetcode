/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
  var count = 0
  var val = num
  while (val) {
    val = val >> 1
    count += 1
  }
  return num ^ (count === 32 ? Number.MAX_SAFE_INTEGER : (1 << count) - 1)
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1304 lang=javascript
 *
 * [1304] 和为零的N个唯一整数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var sumZero = function(n) {
  var result = []
  var i = 1
  while (n >= 2) {
    result.push(i)
    result.push(-i)
    i += 1
    n -= 2
  }
  if (n === 1) {
    result.push(0)
  }
  return result
};
// @lc code=end

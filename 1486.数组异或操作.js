/*
 * @lc app=leetcode.cn id=1486 lang=javascript
 *
 * [1486] 数组异或操作
 */

// @lc code=start
/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
  // 2x ^ (2x + 1) = 1
  function xor (num, ns) {
    if (ns & 1) {
      return (ns - 1) ^ xor(num + 1, ns - 1)
    }
    if (num & 1) {
      return ((num - 1) >> 1 & 1) ^ (ns + num - 1)
    }
    return (num >> 1) & 1
  }
  var res = xor(n, start >> 1) << 1
  if (n & start & 1) {
    res += 1
  }
  return res
};
// @lc code=end

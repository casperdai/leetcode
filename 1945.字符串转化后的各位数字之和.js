/*
 * @lc app=leetcode.cn id=1945 lang=javascript
 *
 * [1945] 字符串转化后的各位数字之和
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var getLucky = function(s, k) {
  var r = [...s].reduce((c, val) => c + (val.charCodeAt(0) - 96), '')
  while (r.length > 1 && k > 0) {
    r = [...r].reduce((c, val) => c + Number(val), 0) + ''
    k -= 1
  }
  return Number(r)
};
// @lc code=end

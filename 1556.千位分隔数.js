/*
 * @lc app=leetcode.cn id=1556 lang=javascript
 *
 * [1556] 千位分隔数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  n += ''
  var diff = n.length % 3
  var s = ''
  for (var i = 0; i < diff; i++) {
    s += n[i]
  }
  for (var i = diff; i < n.length; i += 3) {
    if (s) {
      s += '.'
    }
    s += n[i] + n[i + 1] + n[i + 2]
  }
  return s
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
  var sum = 0;
  var t = 1;
  for (var i = s.length - 1; i >= 0; i--) {
    sum += (s[i].charCodeAt() - 64) * t;
    t *= 26;
  }
  return sum;
};
// @lc code=end

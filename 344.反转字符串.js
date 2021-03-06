/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  var left = 0;
  var right = s.length - 1;
  while (left < right) {
    [s[left], s[right]] = [s[right], s[left]];
    left += 1;
    right -= 1;
  }
  return s;
};
// @lc code=end

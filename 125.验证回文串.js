/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
function isValid (s) {
  return s >= '0' && s <= '9' || s >= 'a' && s <= 'z';
}
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var left = 0;
  var right = s.length - 1;
  s = s.toLowerCase();
  while (left < right) {
    if (!isValid(s[left])) {
      left += 1;
    } else if (!isValid(s[right])) {
      right -= 1;
    } else if (s[left] === s[right]) {
      left += 1;
      right -= 1;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

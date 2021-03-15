/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
  if (num === 1) {
    return true;
  }
  var left = 2;
  var right = Math.ceil(num / 2);
  var mid;
  var s;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    s = mid * mid;
    if (s === num) {
      return true;
    } else if (s < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};
// @lc code=end

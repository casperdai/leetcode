/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
  var start = 0;
  var end = x;
  var mid;
  var result;
  while (start <= end) {
    mid = parseInt((start + end) / 2);
    total = mid * mid;
    if (mid * mid <= x) {
      result = mid;
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }
  return result;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var temp = 0;
  var MAX_VALUE = Math.pow(2, 31) - 1
  var MIN_VALUE = Math.pow(-2, 31)
  var max = Math.floor(MAX_VALUE / 10);
  var min = Math.ceil(MIN_VALUE / 10);
  var maxLast = MAX_VALUE % 10;
  var minLast = MIN_VALUE % 10;
  while (x !== 0) {
    var pop = x % 10;
    switch (true) {
      case temp > 0 && (temp > max || temp === max && pop > maxLast):
      case temp < 0 && (temp < min || temp === min && pop < minLast):
        return 0;
      default:
        temp = temp * 10 + pop;
        x = parseInt(x / 10);
        break;
    }
  }
  return temp;
};
// @lc code=end

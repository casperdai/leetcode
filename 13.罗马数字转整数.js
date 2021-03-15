/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  if (!s) {
    return -1;
  };
  var char
  var temp;
  var num = 0;
  var after = 0;
  for (var i = s.length - 1; i >= 0; i--) {
    char = s[i];
    switch (char) {
      case 'I':
        temp = 1;
        break;
      case 'V':
        temp = 5;
        break;
      case 'X':
        temp = 10;
        break;
      case 'L':
        temp = 50;
        break;
      case 'C':
        temp = 100;
        break;
      case 'D':
        temp = 500;
        break;
      case 'M':
        temp = 1000;
        break;
      default:
        return -1;
    }
    if (temp < after) {
      num -= temp;
    } else {
      num += temp;
    }
    after = temp;
  }
  return num;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1185 lang=javascript
 *
 * [1185] 一周中的第几天
 */

// @lc code=start
/**
 * @param {number} day
 * @param {number} month
 * @param {number} year
 * @return {string}
 */
var dayOfTheWeek = function(day, month, year) {
  for (var i = 1971; i < year; i++) {
    if (i % 400 === 0 || i % 4 === 0 && i % 100 !== 0) {
      day += 366
    } else {
      day += 365
    }
  }
  for (var i = 1; i < month; i++) {
    switch (i) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        day += 31
        break
      case 4:
      case 6:
      case 9:
      case 11:
        day += 30
        break
      default:
        day += year % 400 === 0 || year % 4 === 0 && year % 100 !== 0 ? 29 : 28
        break
    }
  }
  return ['Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday', 'Tuesday', 'Wednesday'][day % 7]
};
// @lc code=end

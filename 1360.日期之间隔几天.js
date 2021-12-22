/*
 * @lc app=leetcode.cn id=1360 lang=javascript
 *
 * [1360] 日期之间隔几天
 */

// @lc code=start
/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function(date1, date2) {
  date1 = date1.split('-').map(val => parseInt(val))
  date2 = date2.split('-').map(val => parseInt(val))
  var syear = Math.min(date1[0], date2[0])
  function getDays (year, month, day) {
    for (var i = syear; i < year; i++) {
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
    return day
  }
  return Math.abs(getDays(date1[0], date1[1], date1[2]) - getDays(date2[0], date2[1], date2[2]))
};
// @lc code=end

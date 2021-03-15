/*
 * @lc app=leetcode.cn id=1154 lang=javascript
 *
 * [1154] 一年中的第几天
 */

// @lc code=start
/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function(date) {
  var arr = date.split('-').map(val => parseInt(val))
  if (arr[1] < 3) {
    return arr[1] === 2 ? 31 + arr[2] : arr[2]
  }
  var more = arr[0] % 400 === 0 || arr[0] % 4 === 0 && arr[0] % 100 !== 0
  var sum = 0
  for (var i = 1; i < arr[1]; i++) {
    switch (i) {
      case 1:
      case 3:
      case 5:
      case 7:
      case 8:
      case 10:
      case 12:
        sum += 31
        break
      case 4:
      case 6:
      case 9:
      case 11:
        sum += 30
        break
      default:
        sum += more ? 29 : 28
        break
    }
  }
  return sum + arr[2]
};
// @lc code=end

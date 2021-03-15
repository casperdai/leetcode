/*
 * @lc app=leetcode.cn id=1507 lang=javascript
 *
 * [1507] 转变日期格式
 */

// @lc code=start
/**
 * @param {string} date
 * @return {string}
 */
var reformatDate = function(date) {
  var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  date = date.split(' ')
  return date[2] + '-' + (month.findIndex(val => val === date[1]) + 1).toString().padStart(2, '0') + '-' + date[0].replace(/[^\d]/g, '').padStart(2, '0')
};
// @lc code=end

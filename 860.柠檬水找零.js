/*
 * @lc app=leetcode.cn id=860 lang=javascript
 *
 * [860] 柠檬水找零
 */

// @lc code=start
/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function(bills) {
  var count5 = 0
  var count10 = 0
  for (var i = 0; i < bills.length; i++) {
    switch (bills[i]) {
      case 5:
        count5 += 1
        break
      case 10:
        if (count5 === 0) {
          return false
        }
        count5 -= 1
        count10 += 1
        break
      case 20:
        if (count10 > 0 && count5 > 0) {
          count5 -= 1
          count10 -= 1
        } else if (count5 > 2) {
          count5 -= 3
        } else {
          return false
        }
        break
      default:
        break
    }
  }
  return true
};
// @lc code=end

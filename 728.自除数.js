/*
 * @lc app=leetcode.cn id=728 lang=javascript
 *
 * [728] 自除数
 */

// @lc code=start
/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDividingNumbers = function(left, right) {
  var result = []
  var temp
  var flag
  for (var i = left; i <= right; i++) {
    temp = i
    flag = true
    while (temp) {
      var last = temp % 10
      if (last === 0) {
        flag = false
        break
      }
      if (i % last === 0) {
        temp = Math.floor(temp / 10)
      } else {
        flag = false
        break
      }
    }
    if (flag) {
      result.push(i)
    }
  }
  return result
};
// @lc code=end

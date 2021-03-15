/*
 * @lc app=leetcode.cn id=788 lang=javascript
 *
 * [788] 旋转数字
 */

// @lc code=start
/**
 * @param {number} N
 * @return {number}
 */
var rotatedDigits = function(N) {
  function isGood (n) {
    var good = false
    var last
    while (n) {
      last = n % 10
      switch (last) {
        case 3:
        case 4:
        case 7:
          return false
        case 2:
        case 5:
        case 6:
        case 9:
          good = true
          break
        default:
          break
      }
      n = Math.floor(n / 10)
    }
    return good
  }
  var count = 0
  for (var i = 2; i <= N; i++) {
    if (isGood(i)) {
      count += 1
    }
  }
  return count
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1688 lang=javascript
 *
 * [1688] 比赛中的配对次数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var numberOfMatches = function(n) {
  var count = 0
  while (n > 1) {
    if (n & 1) {
      n = (n - 1) / 2
      count += n
      n += 1
    } else {
      n /= 2
      count += n
    }
  }
  return count
};
// @lc code=end

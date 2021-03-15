/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
  var count = 0;
  var cache = {};
  for (var i = 2; i < n; i++) {
    if (!cache[i]) {
      count += 1;
      for (var j = i * 2; j < n; j += i) {
        cache[j] = true;
      }
    }
  }
  return count;
};
// @lc code=end

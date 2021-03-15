/*
 * @lc app=leetcode.cn id=771 lang=javascript
 *
 * [771] 宝石与石头
 */

// @lc code=start
/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
  var cache = {}
  for (var i = 0; i < J.length; i++) {
    cache[J[i]] = true
  }
  var count = 0
  for (var i = 0; i < S.length; i++) {
    if (cache[S[i]]) {
      count += 1
    }
  }
  return count
};
// @lc code=end

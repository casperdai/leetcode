/*
 * @lc app=leetcode.cn id=1646 lang=javascript
 *
 * [1646] 获取生成数组中的最大值
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var getMaximumGenerated = function(n) {
  if (n < 2) {
    return n
  }
  var map = [0, 1]
  var max = 1
  for (var i = 1; i <= n; i++) {
    if (i & 1) {
      var v = Math.floor(i / 2)
      map[i] = map[v] + map[v + 1]
      max = Math.max(max, map[i])
    } else {
      map[i] = map[i / 2]
    }
  }
  return max
};
// @lc code=end

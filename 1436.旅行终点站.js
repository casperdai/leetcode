/*
 * @lc app=leetcode.cn id=1436 lang=javascript
 *
 * [1436] 旅行终点站
 */

// @lc code=start
/**
 * @param {string[][]} paths
 * @return {string}
 */
var destCity = function(paths) {
  var map = {}
  for (var i = 0; i < paths.length; i++) {
    map[paths[i][0]] = true
  }
  for (var i = 0; i < paths.length; i++) {
    if (!map[paths[i][1]]) {
      return paths[i][1]
    }
  }
  return null
};
// @lc code=end

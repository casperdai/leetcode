/*
 * @lc app=leetcode.cn id=1232 lang=javascript
 *
 * [1232] 缀点成线
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  if (coordinates.length < 3) {
    return true
  }
  var node = coordinates[0]
  var node1 = coordinates[1]
  for (var i = 2; i < coordinates.length; i++) {
    var node2 = coordinates[i]
    if ((node2[0] - node[0]) * (node1[1] - node[1]) !== (node1[0] - node[0]) * (node2[1] - node[1])) {
      return false
    }
  }
  return true
};
// @lc code=end

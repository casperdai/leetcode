/*
 * @lc app=leetcode.cn id=1496 lang=javascript
 *
 * [1496] 判断路径是否相交
 */

// @lc code=start
/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function(path) {
  var row = 0
  var col = 0
  var map = {
    '0-0': true
  }
  for (var i = 0; i < path.length; i++) {
    switch (path[i]) {
      case 'N':
        col += 1
        break
      case 'S':
        col -= 1
        break
      case 'E':
        row += 1
        break
      case 'W':
        row -= 1
        break
    }
    if (map[row + '-' + col]) {
      return true
    } else {
      map[row + '-' + col] = true
    }
  }
  return false
};
// @lc code=end

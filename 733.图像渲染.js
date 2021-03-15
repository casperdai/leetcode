/*
 * @lc app=leetcode.cn id=733 lang=javascript
 *
 * [733] 图像渲染
 */

// @lc code=start
/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
  var start = image[sr][sc]
  if (start === newColor) {
    return image
  }
  var rdirection = [-1, 1, 0, 0]
  var cdirection = [0, 0, -1, 1]
  var row = image.length
  var col = image[0].length
  var stack = [[sr, sc]]
  while (stack.length) {
    var curr = stack.pop()
    image[curr[0]][curr[1]] = newColor
    for (var i = 0; i < 4; i++) {
      var r = curr[0] + rdirection[i]
      var c = curr[1] + cdirection[i]
      if (r >= 0 && r < row && c >= 0 && c < col && image[r][c] === start) {
        stack.push([r, c])
      }
    }
  }
  return image
};
// @lc code=end

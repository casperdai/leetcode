/*
 * @lc app=leetcode.cn id=1051 lang=javascript
 *
 * [1051] 高度检查器
 */

// @lc code=start
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function(heights) {
  var arr = []
  for (var i = 0; i < heights.length; i++) {
    arr[heights[i]] = (arr[heights[i]] || 0) + 1
  }
  var sum = 0
  for (var i = 1, j = 0; j < heights.length; i++) {
    while (arr[i]) {
      if (heights[j++] !== i) {
        sum += 1
      }
      arr[i] -= 1
    }
  }
  return sum
};
// @lc code=end

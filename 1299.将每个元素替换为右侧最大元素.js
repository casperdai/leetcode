/*
 * @lc app=leetcode.cn id=1299 lang=javascript
 *
 * [1299] 将每个元素替换为右侧最大元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function(arr) {
  var max = -1
  for (var i = arr.length - 1; i >= 0; i--) {
    if (arr[i] > max) {
      [max, arr[i]] = [arr[i], max]
    } else {
      arr[i] = max
    }
  }
  return arr
};
// @lc code=end

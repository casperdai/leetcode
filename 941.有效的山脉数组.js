/*
 * @lc app=leetcode.cn id=941 lang=javascript
 *
 * [941] 有效的山脉数组
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function(arr) {
  var l = 0
  while (l + 1 < arr.length && arr[l] < arr[l + 1]) {
    l += 1
  }
  if (l === 0 || l === arr.length - 1) {
    return false
  }
  while (l + 1 < arr.length && arr[l] > arr[l + 1]) {
    l += 1
  }
  return l === arr.length - 1
};
// @lc code=end

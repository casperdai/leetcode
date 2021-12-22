/*
 * @lc app=leetcode.cn id=1287 lang=javascript
 *
 * [1287] 有序数组中出现次数超过25%的元素
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function(arr) {
  if (arr.length < 4) {
    return arr[0]
  }
  var count = Math.floor(arr.length / 4) + 1
  var num = 1
  for(var i = 1; i < arr.length; i++) {
    arr[i] === arr[i - 1] ? num++ : num = 1
    if (num === count) {
      return arr[i]
    }
  }
};
// @lc code=end

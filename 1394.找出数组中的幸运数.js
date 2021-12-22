/*
 * @lc app=leetcode.cn id=1394 lang=javascript
 *
 * [1394] 找出数组中的幸运数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function(arr) {
  var has = []
  for (var i = 0; i < arr.length; i++) {
    has[arr[i]] = (has[arr[i]] || 0) + 1
  }
  for (var i = has.length - 1; i > 0; i--) {
    if (i === has[i]) {
      return i
    }
  }
  return -1
};
// @lc code=end

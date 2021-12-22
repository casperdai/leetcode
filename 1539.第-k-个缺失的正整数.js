/*
 * @lc app=leetcode.cn id=1539 lang=javascript
 *
 * [1539] 第 k 个缺失的正整数
 */

// @lc code=start
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function(arr, k) {
  var pre = 0
  for (var i = 0; i < arr.length; i++) {
    var gap = arr[i] - pre - 1
    if (gap >= k) {
      return pre + k
    }
    pre = arr[i]
    k -= gap
  }
  return pre + k
};
// @lc code=end

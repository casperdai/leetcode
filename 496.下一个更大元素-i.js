/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
  var stack = []
  var map = {}
  for (var i = 0; i < nums2.length; i++) {
    while (stack.length > 0 && nums2[i] > stack[stack.length - 1]) {
      map[stack.pop()] = nums2[i]
    }
    stack.push(nums2[i])
  }
  while (stack.length > 0) {
    map[stack.pop()] = -1
  }
  return nums1.map(num => map[num])
};
// @lc code=end

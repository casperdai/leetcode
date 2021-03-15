/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  var s1 = m - 1;
  var s2 = n - 1;
  var len = m + n - 1;
  while (len >= 0) {
    if (s1 >= 0 && (s2 === -1 || nums1[s1] > nums2[s2])) {
      nums1[len] = nums1[s1];
      s1 -= 1;
    } else {
      nums1[len] = nums2[s2];
      s2 -= 1;
    }
    len -= 1;
  }
};
// @lc code=end

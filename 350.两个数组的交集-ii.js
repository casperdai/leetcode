/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
  var arr = [];
  var cache = {};
  for (var i = 0; i < nums1.length; i++) {
    if (nums1[i] in cache) {
      cache[nums1[i]] += 1;
    } else {
      cache[nums1[i]] = 1;
    }
  }
  for (var i = 0; i < nums2.length; i++) {
    if (nums2[i] in cache && cache[nums2[i]] > 0) {
      cache[nums2[i]] -= 1;
      arr.push(nums2[i]);
    }
  }
  return arr;
};
// @lc code=end

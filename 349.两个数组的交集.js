/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
  nums1.sort((a, b) => a -b);
  nums2.sort((a, b) => a -b);
  var c1 = 0;
  var c2 = 0;
  var arr = [];
  while (c1 < nums1.length && c2 < nums2.length) {
    if (nums1[c1] === nums2[c2]) {
      arr.push(nums1[c1]);
      c1 += 1;
      c2 += 1;
      while (c1 < nums1.length && nums1[c1] === nums1[c1 - 1]) {
        c1 += 1;
      }
    } else if (nums1[c1] < nums2[c2]) {
      c1 += 1;
    } else {
      c2 += 1;
    }
  }
  return arr;
};
// @lc code=end

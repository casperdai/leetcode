/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
  var slow = 0;
  var fast = 0;
  var len = nums.length;
  var map = {};
  while (fast < len) {
    if (map[nums[fast]]) {
      return true;
    }
    map[nums[fast]] = true;
    if (fast - slow >= k) {
      map[nums[slow]] = false;
      slow += 1;
    }
    fast += 1;
  }
  return false;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 */

// @lc code=start
function backtrack (list, temp, nums) {
  if (temp.length === nums.length) {
    list.push([...temp]);
    return;
  }
  for (var i = 0; i < nums.length; i++) {
    if (temp.includes(nums[i])) {
      continue;
    }
    temp.push(nums[i]);
    backtrack(list, temp, nums);
    temp.pop();
  }
}
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
  var list = [];
  backtrack(list, [], nums);
  return list;
};
// @lc code=end

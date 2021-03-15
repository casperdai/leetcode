/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
 */

// @lc code=start
function createNode (nums, start, end) {
  if (start > end) {
    return null;
  }
  if (start === end) {
    return new TreeNode(nums[start]);
  }
  var mid = Math.floor((start + end) / 2);
  var node = new TreeNode(nums[mid]);
  node.left = createNode(nums, start, mid - 1);
  node.right = createNode(nums, mid + 1, end);
  return node;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
  return createNode(nums, 0, nums.length - 1);
};
// @lc code=end

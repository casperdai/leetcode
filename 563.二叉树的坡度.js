/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var findTilt = function(root) {
  var sum = 0
  function getTilt (node) {
    if (!node) {
      return 0
    }
    var left = getTilt(node.left)
    var right = getTilt(node.right)
    sum += Math.abs(left - right)
    return left + right + node.val
  }
  getTilt(root)
  return sum
};
// @lc code=end

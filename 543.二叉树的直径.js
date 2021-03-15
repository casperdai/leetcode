/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
  var count = 1
  function getDepth (node) {
    if (!node) {
      return 0
    }
    var l = getDepth(node.left)
    var r = getDepth(node.right)
    console.log(node.val, l, r)
    count = Math.max(count, l + r + 1)
    return Math.max(l, r) + 1
  }
  getDepth(root)
  return count - 1
};
// @lc code=end

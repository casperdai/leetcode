/*
 * @lc app=leetcode.cn id=783 lang=javascript
 *
 * [783] 二叉搜索树节点最小距离
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
var minDiffInBST = function(root) {
  var min = Number.MAX_SAFE_INTEGER
  var pre = -1
  function findMin (node) {
    if (!node) {
      return
    }
    findMin(node.left)
    if (pre !== -1) {
      min = Math.min(min, Math.abs(pre - node.val))
    }
    pre = node.val
    findMin(node.right)
  }
  findMin(root)
  return min
};
// @lc code=end

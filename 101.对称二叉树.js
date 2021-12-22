/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
 */

// @lc code=start
function isSame (left, right) {
  if (!left && !right) {
    return true;
  }
  if (left && right && left.val === right.val) {
    return isSame(left.left, right.right) && isSame(left.right, right.left);
  }
  return false;
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
  if (!root) {
    return true;
  }
  return isSame(root.left, root.right);
};
// @lc code=end

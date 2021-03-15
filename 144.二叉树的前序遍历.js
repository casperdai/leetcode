/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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
 * @return {number[]}
 */
var preorderTraversal = function(root) {
  var stack = [];
  var node = root;
  var arr = [];
  while (node) {
    arr.push(node.val);
    if (node.left) {
      if (node.right) {
        stack.push(node.right);
      }
      node = node.left;
    } else {
      node = node.right || stack.pop();
    }
  }
  return arr;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=671 lang=javascript
 *
 * [671] 二叉树中第二小的节点
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
var findSecondMinimumValue = function(root) {
  var temp = -1
  var stack = []
  var node = root
  while (node || stack.length > 0) {
    if (node && node.left) {
      if (node.val === node.left.val) {
        if (node.val === node.right.val) {
          stack.push(node.right)
        } else {
          temp = temp === -1 ? node.right.val : Math.min(temp, node.right.val)
        }
        node = node.left
      } else {
        temp = temp === -1 ? node.left.val : Math.min(temp, node.left.val)
        node = node.right
      }
    } else {
      node = stack.pop()
    }
  }
  return temp
};
// @lc code=end

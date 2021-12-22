/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
 * @return {number[]}
 */
var averageOfLevels = function(root) {
  var result = []
  var nodes = [root]
  var count
  while (nodes.length > 0) {
    count = nodes.length
    result.push(nodes.reduce((total, node) => total + node.val, 0) / count)
    var children = []
    nodes.forEach(node => {
      if (node.left) {
        children.push(node.left)
      }
      if (node.right) {
        children.push(node.right)
      }
    })
    nodes = children
  }
  return result
};
// @lc code=end

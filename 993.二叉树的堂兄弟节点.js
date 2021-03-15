/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
var isCousins = function(root, x, y) {
  var dmap = {}
  var pmap = {}
  function dfs (node, parent, depth) {
    if (node) {
      dmap[node.val] = depth
      if (parent) {
        pmap[node.val] = parent.val
      }
      dfs(node.left, node, depth + 1)
      dfs(node.right, node, depth + 1)
    }
  }
  dfs(root, null, 0)
  return dmap[x] === dmap[y] && pmap[x] !== pmap[y]
};
// @lc code=end

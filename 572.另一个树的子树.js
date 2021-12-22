/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一个树的子树
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
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */
var isSubtree = function(s, t) {
  function dfs (node) {
    if (!node) {
      return 'null'
    }
    return ',' + node.val + ',' + dfs(node.left) + ',' + dfs(node.right) + ','
  }
  return dfs(s).indexOf(dfs(t)) >= 0
};
// @lc code=end

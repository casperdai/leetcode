/*
 * @lc app=leetcode.cn id=606 lang=javascript
 *
 * [606] 根据二叉树创建字符串
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
 * @param {TreeNode} t
 * @return {string}
 */
var tree2str = function(t) {
  if (!t) {
    return ''
  }
  var result = ''
  var stack = [{ node: t, check: false }]
  var curr
  while (stack.length > 0) {
    if (curr) {
      curr.check = true
      result += '(' + curr.node.val
      if (curr.node.right) {
        if (!curr.node.left) {
          result += '()'
        }
        stack.push({ node: curr.node.right, check: false })
      }
      if (curr.node.left) {
        stack.push({ node: curr.node.left, check: false })
      }
      curr = null
    } else {
      curr = stack[stack.length - 1]
      if (curr.check) {
        stack.pop()
        result += ')'
        curr = null
      }
    }
  }
  return result.slice(1, -1)
};
// @lc code=end

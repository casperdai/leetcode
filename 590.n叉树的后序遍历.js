/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N叉树的后序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var postorder = function(root) {
  if (!root) {
    return []
  }
  var result = []
  var stack = [{ node: root, check: false }]
  var curr = []
  while (stack.length > 0) {
    curr = stack[stack.length - 1]
    if (!curr.node.children || curr.check) {
      stack.pop()
      result.push(curr.node.val)
    } else {
      curr.check = true
      for (var i = curr.node.children.length - 1; i >= 0; i--) {
        stack.push({
          node: curr.node.children[i],
          check: false
        })
      }
    }
  }
  return result
};
// @lc code=end

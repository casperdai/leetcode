/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node} root
 * @return {number[]}
 */
var preorder = function(root) {
  if (!root) {
    return []
  }
  var stack = [root]
  var node
  var result = []
  while (stack.length > 0) {
    node = stack.pop()
    result.push(node.val)
    if (node.children) {
      for (var i = node.children.length - 1; i >= 0; i--) {
        stack.push(node.children[i])
      }
    }
  }
  return result
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
  if (!root) {
    return 0
  }
  var stack = [{ node: root, depth: 1 }]
  var curr
  var depth = 0
  var currDepth = 0
  while (stack.length > 0) {
    curr = stack.pop()
    currDepth = curr.depth
    depth = Math.max(currDepth, depth)
    if (curr.node.children) {
      for (var i = 0; i < curr.node.children.length; i++) {
        stack.push({
          node: curr.node.children[i],
          depth: currDepth + 1
        })
      }
    }
  }
  return depth
};
// @lc code=end

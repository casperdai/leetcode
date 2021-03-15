/*
 * @lc app=leetcode.cn id=897 lang=javascript
 *
 * [897] 递增顺序查找树
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
 * @return {TreeNode}
 */
var increasingBST = function(root) {
  var curr = root
  var stack = []
  var pre = null
  var head = null
  while (curr || stack.length > 0) {
    if (curr) {
      stack.push(curr)
      curr = curr.left
    } else {
      curr = stack.pop()
      var next = curr.right
      curr.left = null
      curr.right = null
      if (!head) {
        head = curr
      } else {
        pre.right = curr
      }
      pre = curr
      curr = next
    }
  }
  return head
};
// @lc code=end

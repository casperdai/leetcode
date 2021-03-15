/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
function isLeafNode (node) {
  return !node.left && !node.right;
}
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
  if (!root) {
    return 0;
  }
  var sum = 0;
  var stack = [root];
  var node;
  while (stack.length > 0) {
    node = stack.pop();
    if (node.left) {
      if (isLeafNode(node.left)) {
        sum += node.left.val;
      } else {
        stack.push(node.left);
      }
    }
    if (node.right) {
      if (!isLeafNode(node.right)) {
        stack.push(node.right);
      }
    }
  }
  return sum;
};
// @lc code=end

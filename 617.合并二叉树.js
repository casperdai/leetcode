/*
 * @lc app=leetcode.cn id=617 lang=javascript
 *
 * [617] 合并二叉树
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
 * @param {TreeNode} t1
 * @param {TreeNode} t2
 * @return {TreeNode}
 */
var mergeTrees = function(t1, t2) {
  if (!t1 || !t2) {
    return t1 || t2
  }
  var stack1 = [t1]
  var stack2 = [t2]
  var node1
  var node2
  while (stack1.length > 0) {
    node1 = stack1.pop()
    node2 = stack2.pop()
    if (node2) {
      node1.val += node2.val
    }
    if (node1.right) {
      stack1.push(node1.right)
      stack2.push(node2 && node2.right)
    } else if (node2 && node2.right) {
      node1.right = node2.right
    }
    if (node1.left) {
      stack1.push(node1.left)
      stack2.push(node2 && node2.left)
    } else if (node2 && node2.left) {
      node1.left = node2.left
    }
  }
  return t1
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function(root) {
  var curr
  var result = []
  var count
  var max = 0
  function update (val) {
    if (val === curr) {
      count += 1
    } else {
      count = 1
      curr = val
    }
    if (count > max) {
      max = count
      result = [val]
    } else if (count === max) {
      result.push(val)
    }
  }
  var node = root
  while (node) {
    if (!node.left) {
      update(node.val)
      node = node.right
      continue
    }
    var next = node.left
    while (next.right && next.right !== node) {
      next = next.right
    }
    if (next.right) {
      next.right = null
      update(node.val)
      node = node.right
    } else {
      next.right = node
      node = node.left
    }
  }
  return result
};
// @lc code=end

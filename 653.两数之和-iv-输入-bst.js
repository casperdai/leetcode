/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function(root, k) {
  if (!root) {
    return false
  }
  var arr = []
  var stack = []
  var node = root
  while (node || stack.length > 0) {
    if (node) {
      stack.push(node)
      node = node.left
    } else {
      node = stack.pop()
      arr.push(node.val)
      node = node.right
    }
  }
  var l = 0
  var r = arr.length - 1
  var sum
  while (l < r) {
    sum = arr[l] + arr[r]
    if (sum === k) {
      return true
    }
    if (sum < k) {
      l += 1
    } else {
      r -= 1
    }
  }
  return false
};
// @lc code=end

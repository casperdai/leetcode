/*
 * @lc app=leetcode.cn id=1022 lang=javascript
 *
 * [1022] 从根到叶的二进制数之和
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
 * @return {number}
 */
var sumRootToLeaf = function(root) {
  var arr = []
  var result = 0
  function getVal (node) {
    if (node) {
      arr.push(node.val)
      if (!node.left && !node.right) {
        result += parseInt(arr.join(''), 2)
      } else {
        getVal(node.left)
        getVal(node.right)
      }
      arr.pop()
    }
  }
  getVal(root)
  return result
};
// @lc code=end

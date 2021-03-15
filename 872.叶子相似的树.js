/*
 * @lc app=leetcode.cn id=872 lang=javascript
 *
 * [872] 叶子相似的树
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
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
  function getLeap (node) {
    var arr = []
    if (node) {
      var stack = [node]
      while (stack.length > 0) {
        node = stack.pop()
        if (node.left || node.right) {
          if (node.right) {
            stack.push(node.right)
          }
          if (node.left) {
            stack.push(node.left)
          }
        } else {
          arr.push(node.val)
        }
      }
    }
    return arr
  }
  var leap1 = getLeap(root1)
  var leap2 = getLeap(root2)
  if (leap1.length !== leap2.length) {
    return false
  }
  for (var i = 0; i < leap1.length; i++) {
    if (leap1[i] !== leap2[i]) {
      return false
    }
  }
  return true
};
// @lc code=end

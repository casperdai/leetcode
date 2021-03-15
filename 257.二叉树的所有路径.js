/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
 */

// @lc code=start
function getPath (node, path, result) {
  path += node.val
  if (!node.left && !node.right) {
    result.push(path);
  } else {
    path += '->';
    if (node.left) {
      getPath(node.left, path, result);
    }
    if (node.right) {
      getPath(node.right, path, result);
    }
  }
}
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  var result = [];
  if (root) {
    getPath(root, '', result);
  }
  return result;
};
// @lc code=end

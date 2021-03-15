/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
 */

// @lc code=start
function find (node, arr, depth) {
  if (node) {
    if (!arr[depth]) {
      arr[depth] = []
    }
    arr[depth].push(node.val);
    find(node.left, arr, depth + 1);
    find(node.right, arr, depth + 1);
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
  var arr = [];
  find(root, arr, 0);
  var res = [];
  for (var i = arr.length - 1; i >= 0; i--) {
    res.push(arr[i])
  }
  return res;
};
// @lc code=end

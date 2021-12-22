/*
 * @lc app=leetcode.cn id=884 lang=javascript
 *
 * [884] 两句话中的不常见单词
 */

// @lc code=start
/**
 * @param {string} A
 * @param {string} B
 * @return {string[]}
 */
var uncommonFromSentences = function(A, B) {
  var map = {}
  var arr = A.split(' ')
  for (var i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1
    } else {
      map[arr[i]] += 1
    }
  }
  arr = B.split(' ')
  for (var i = 0; i < arr.length; i++) {
    if (!map[arr[i]]) {
      map[arr[i]] = 1
    } else {
      map[arr[i]] += 1
    }
  }
  return Object.keys(map).filter(val => map[val] === 1)
};
// @lc code=end

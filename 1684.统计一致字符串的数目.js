/*
 * @lc app=leetcode.cn id=1684 lang=javascript
 *
 * [1684] 统计一致字符串的数目
 */

// @lc code=start
/**
 * @param {string} allowed
 * @param {string[]} words
 * @return {number}
 */
var countConsistentStrings = function(allowed, words) {
  var map = {}
  for (var i = 0; i < allowed.length; i++) {
    map[allowed[i]] = true
  }
  return words.reduce((count, val) => {
    for (var i = 0; i < val.length; i++) {
      if (!map[val[i]]) {
        return count
      }
    }
    return count + 1
  }, 0)
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
  var cache = {};
  var max = 0;
  var start = 0;
  var char;
  for (var i = 0; i < s.length; i++) {
    char = s[i];
    if (char in cache) {
      if (start <= cache[char]) {
        max = Math.max(max, i - start);
        start = cache[char] + 1;
      }
    }
    cache[char] = i;
  }
  return Math.max(max, s.length - start);
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
  const map = {}
  for (let i = 0; i < s.length; i++) {
    let code = s.charCodeAt(i)
    if (map[code]) {
      map[code] += 1
    } else {
      map[code] = 1
    }
  }
  let length = 0
  let hasMid = false
  for (let key in map) {
    let count = map[key]
    length += Math.floor(count / 2) * 2
    if (!hasMid && count % 2 === 1) {
      length += 1
      hasMid = true
    }
  }
  return length
};
// @lc code=end

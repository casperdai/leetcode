/*
 * @lc app=leetcode.cn id=804 lang=javascript
 *
 * [804] 唯一摩尔斯密码词
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {number}
 */
var uniqueMorseRepresentations = function(words) {
  var s = ['.-','-...','-.-.','-..','.','..-.','--.','....','..','.---','-.-','.-..','--','-.','---','.--.','--.-','.-.','...','-','..-','...-','.--','-..-','-.--','--..']
  var map = {}
  var count = 0
  for (var i = 0; i < words.length; i++) {
    var str = ''
    for (var j = 0; j < words[i].length; j++) {
      str += s[words[i].charCodeAt(j) - 97]
    }
    if (!map[str]) {
      map[str] = true
      count += 1
    }
  }
  return count
};
// @lc code=end

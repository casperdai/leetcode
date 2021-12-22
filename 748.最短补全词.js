/*
 * @lc app=leetcode.cn id=748 lang=javascript
 *
 * [748] 最短补全词
 */

// @lc code=start
/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function(licensePlate, words) {
  function count (str) {
    var map = {}
    for (var i = 0; i < str.length; i++) {
      if (str[i] >= 'a' && str[i] <= 'z') {
        if (map[str[i]]) {
          map[str[i]] += 1
        } else {
          map[str[i]] = 1
        }
      }
    }
    return map
  }

  function bijiao (curr) {
    for (var j = 0; j < keys.length; j++) {
      if (!curr[keys[j]] || target[keys[j]] > curr[keys[j]]) {
        return false
      }
    }
    return true
  }

  var target = count(licensePlate.toLowerCase())
  var keys = Object.keys(target)

  var result = ''
  for (var i = 0; i < words.length; i++) {
    if ((result === '' || words[i].length < result.length) && bijiao(count(words[i]))) {
      result = words[i]
    }
  }
  return result
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=1763 lang=javascript
 *
 * [1763] 最长的美好子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestNiceSubstring = function(s) {
  function findIndex (str) {
    var arr = []
    var arrB = []
    for (var i = 0; i < str.length; i++) {
      var code = str.charCodeAt(i)
      if (code >= 97) {
        code -= 97
        if (arr[code] == null) {
          arr[code] = i
        }
      } else {
        code -= 65
        if (arrB[code] == null) {
          arrB[code] = i
        }
      }
    }
    for (var j = 0; j <= 26; j++) {
      if (arr[j] == null && arrB[j] != null) {
        return arrB[j]
      } else if (arr[j] != null && arrB[j] == null) {
        return arr[j]
      }
    }
    return -1
  }

  var queue = [s]
  var result = ''
  while (queue.length > 0) {
    var str = queue.pop()
    if (str.length > result.length) {
      var index = findIndex(str)
      if (index === -1) {
        result = str
      } else {
        queue.push(str.substring(index + 1), str.substring(0, index))
      }
    }
  }
  return result
};
// @lc code=end

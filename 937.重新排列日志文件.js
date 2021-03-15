/*
 * @lc app=leetcode.cn id=937 lang=javascript
 *
 * [937] 重新排列日志文件
 */

// @lc code=start
/**
 * @param {string[]} logs
 * @return {string[]}
 */
var reorderLogFiles = function(logs) {
  function isNum (s) {
    var has = false
    var i = 0
    while (i < s.length) {
      if (has) {
        return {
          key: s.substring(0, i - 1),
          val: s.slice(i),
          bool: s[i] >= '0' && s[i] <= '9',
          content: s
        }
      } else if (s[i] === ' ') {
        has = true
      }
      i += 1
    }
    return false
  }
  var nums = []
  var strs = []
  for (var i = 0; i < logs.length; i++) {
    var target = isNum(logs[i])
    if (target.bool) {
      nums.push(target.content)
    } else {
      strs.push(target)
    }
  }
  return strs.sort((a, b) => {
    if (a.val === b.val) {
      return a.key <= b.key ? -1 : 1
    }
    return a.val < b.val ? -1 : 1
  }).map(item => item.content).concat(nums)
};
// @lc code=end

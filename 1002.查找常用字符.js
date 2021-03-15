/*
 * @lc app=leetcode.cn id=1002 lang=javascript
 *
 * [1002] 查找常用字符
 */

// @lc code=start
/**
 * @param {string[]} A
 * @return {string[]}
 */
var commonChars = function(A) {
  return A.reduce(([...prev], [...curr]) => {
    return prev.filter(s => {
      const index = curr.indexOf(s)
      if (~index) {
        curr.splice(index, 1)
        return true
      } else {
        return false
      }
    })
  })
};
// @lc code=end

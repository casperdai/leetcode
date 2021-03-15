/*
 * @lc app=leetcode.cn id=929 lang=javascript
 *
 * [929] 独特的电子邮件地址
 */

// @lc code=start
/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
  function change (s) {
    var arr = s.split('@')
    var mail = ''
    for (var i = 0; i < arr[0].length; i++) {
      if (arr[0][i] === '+') {
        break
      } else if (arr[0][i] === '.') {
        continue
      } else {
        mail += arr[0][i]
      }
    }
    return mail + '@' + arr[1]
  }
  var map = {}
  for (var i = 0; i < emails.length; i++) {
    map[change(emails[i])] = true
  }
  return Object.keys(map).length
};
// @lc code=end

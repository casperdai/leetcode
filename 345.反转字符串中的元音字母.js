/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
function isOrigin (s) {
  switch (s) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
    case 'A':
    case 'E':
    case 'I':
    case 'O':
    case 'U':
      return true;
    default:
      return false;
  }
}
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
  var left = 0;
  var right = s.length - 1;
  var l = false;
  var r = false;
  var arr = s.split('');
  while (left < right) {
    if (!l) {
      l = isOrigin(arr[left]);
      if (!l) {
        left += 1;
      }
    }
    if (!r) {
      r = isOrigin(arr[right]);
      if (!r) {
        right -= 1;
      }
    }
    if (l && r) {
      [arr[left], arr[right]] = [arr[right], arr[left]];
      left += 1;
      right -= 1;
      l = false;
      r = false;
    }
  }
  return arr.join('');
};
// @lc code=end

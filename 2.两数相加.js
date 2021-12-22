/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var a = l1
  var b = l2
  var temp = 0
  var more = false
  var first = null
  var result = null
  while (a || b) {
    if (a && b) {
      temp = a.val + b.val
    } else {
      temp = a ? a.val : b.val
    }
    if (more) {
      temp += 1
    }
    more = temp >= 10
    if (more) {
      temp -= 10
    }
    if (first === null) {
      first = new ListNode(temp, null)
      result = first
    } else {
      result.next = new ListNode(temp, null)
      result = result.next
    }
    a && (a = a.next)
    b && (b = b.next)
  }
  if (more) {
    result.next = new ListNode(1, null)
    result = result.next
  }
  return first
};
// @lc code=end

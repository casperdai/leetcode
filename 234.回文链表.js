/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  if (!head || !head.next) {
    return true;
  }
  var slow = head;
  var right = head;
  while (right.next && right.next.next) {
    slow = slow.next;
    right = right.next.next;
  }

  var pre = null;
  var curr = slow.next;
  while (curr) {
    [pre, curr.next, curr] = [curr, pre, curr.next]
  }

  var left = head;
  right = pre;
  while (right) {
    if (left.val !== right.val) {
      return false;
    }
    left = left.next;
    right = right.next;
  }
  return true;
};
// @lc code=end

/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {
  var a = l1;
  var b = l2;
  var temp = { next: null }
  var curr = temp;
  var mid;
  while (a || b) {
    if (a && (!b || a.val <= b.val)) {
      mid = a;
      a = a.next;
    } else if (b && (!a || a.val > b.val)) {
      mid = b;
      b = b.next;
    }
    curr.next = mid;
    curr = mid;
  }
  return temp.next;
};
// @lc code=end

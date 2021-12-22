/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
// fast先走n步，则fast到底时slow为倒数第n个
// 因需删除slow，则需slow.present.next = slow.next
// 则将slow的初始值往前移动1位则变为slow.next = slow.next.next
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
  var result = { val: 0, next: head }
  var fast = head
  var slow = result
  while (n > 0) {
    fast = fast.next
    n -= 1
  }
  while (fast) {
    fast = fast.next
    slow = slow.next
  }
  slow.next = slow.next.next
  return result.next
};
// @lc code=end

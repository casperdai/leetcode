/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
var hasCycle = function(head) {
  var slow = head;
  var fast = head;
  while (slow && fast) {
    slow = slow.next;
    fast = fast.next;
    fast && (fast = fast.next);
    if (slow === fast) {
      break;
    }
  }
  return slow ? slow === fast : false;
};
// @lc code=end

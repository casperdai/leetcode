/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
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
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) {
    return null;
  }
  var p1 = headA;
  var p2 = headB;
  var l1;
  var l2;
  while (true) {
    if (p1 === p2) {
      return p1;
    }
    if (p1.next) {
      p1 = p1.next;
    } else {
      l1 = p1;
      p1 = headB;
    }
    if (p2.next) {
      p2 = p2.next;
    } else {
      l2 = p2;
      p2 = headA;
    }
    if (l1 && l2 && l1 !== l2) {
      return null;
    }
  }
};
// @lc code=end

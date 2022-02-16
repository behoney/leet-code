/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || head.next == null) return head;

  let ptr = head;
  let counter = 1;
  let prev = null;
  while (ptr) {
    if (counter % 2 == 0) {
      counter = 0;
      const temp = prev.val;
      prev.val = ptr.val;
      ptr.val = temp;
    }
    prev = ptr;
    ptr = ptr.next;
    counter++;
  }

  return head;

};
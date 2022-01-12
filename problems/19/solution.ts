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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  if (!head || (!head.next && n == 1)) return null;

  let cur = head,
    cnt = 0;

  while (cur) {
    cur = cur.next;
    cnt++;
  }

  cur = head;
  let prev = null;
  for (let i = 0; i < cnt; i++) {
    if (i == cnt - n) {
      if (!prev) return cur.next;
      prev.next = cur.next;
      return head;
    }
    prev = cur;
    cur = cur.next;
  }
  return null;
}

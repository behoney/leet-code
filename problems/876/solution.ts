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

function middleNode(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let ptr = head;
  let middle = head;
  let count = 0;

  while (ptr) {
    ptr = ptr.next;

    count++;
    if (count % 2 == 0) middle = middle.next ? middle.next : middle;
  }
  return middle;
}

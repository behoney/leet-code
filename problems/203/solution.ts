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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  if (head == null) return null;
  let ptr = head;
  while (ptr != null) {
    if (ptr.next?.val == val) ptr.next = ptr.next?.next;
    else {
      ptr = ptr.next;
    }
  }

  if (head?.val == val) head = head?.next;

  return head;
}

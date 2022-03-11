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

function rotateRight(head: ListNode | null, k: number): ListNode | null {
  if (!head || !head.next || k === 0) return head;
  let listSize = 0;
  let current = head, prev = null, last;
  while (current !== null) {
    listSize++;
    last = current;
    current = current.next;
  }
  
  const rotateCount = k % listSize;
  if (rotateCount === 0) return head;

  let count = 0;
  current = head;
  prev = null;

  while (count < listSize - rotateCount) {
    count++;

    prev = current;
    current = current.next;
  }

  if(prev) prev.next = null;
  last.next = head;

  return current;
};
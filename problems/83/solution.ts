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

function deleteDuplicates(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const visited = [];
  let ptr = head;
  let prev = null;
  while (ptr) {
    if (visited.indexOf(ptr.val) == -1) {
      visited.push(ptr.val);
      prev = ptr;
      ptr = ptr.next;
    }
    else {
      ptr = ptr.next;
      prev.next = ptr;
    }
  }

  return head;

};
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
  const visited = [];
  const duplicated = [];
  let ptr = head;

  while (ptr) {
    if (visited.indexOf(ptr.val) == -1) {
      visited.push(ptr.val);
    } else duplicated.push(ptr.val);
    ptr = ptr.next;
  }

  const result = [];
  for (const e of visited) {
    if (duplicated.indexOf(e) == -1) result.push(e);
  }

  let node = null;

  while (result.length) {
    const val = result.pop();

    node = new ListNode(val, node);
  }

  return node;
}

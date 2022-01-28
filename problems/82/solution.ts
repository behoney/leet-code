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
  while (head) {
    if (visited.indexOf(head.val) == -1) {
      visited.push(head.val);
    } else duplicated.push(head.val);
    head = head.next;
  }

  const result = visited.filter((e) => duplicated.indexOf(e) == -1);
  let node = new ListNode(result.pop(), null);

  while (result) {
    node = new ListNode(result.pop(), node);
  }

  return node;
}

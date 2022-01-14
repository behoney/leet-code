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

 function reverseList(head: ListNode | null): ListNode | null {
  if(!head) return null;
  let result = new ListNode(head.val, null);
  head=head.next;
  while(head){
      result = new ListNode(head.val, result);
      head = head.next;
  }
  
  return result;

};
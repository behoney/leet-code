// Rep1 ~ 4min 30sec
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteMiddle = function(head) {
    if(!head.next) return null

    let ptr = head
    let count = 0
    while(ptr){
        count++
        ptr = ptr.next
    }
    
    ptr = head
    let i=0;
    const target = count >> 1
    while(ptr){
        if(i+1 === target){
            ptr.next = ptr.next.next
            break;
        }
        i++
        ptr = ptr.next
    }

    return head
};
// rep 2. 1min 55sec

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    const visited = new Set()

    let ptr = head
    while(ptr !== null)
    {
        if(visited.has(ptr))
            return true
        visited.add(ptr)
        ptr = ptr.next
    }
    
    return false
};
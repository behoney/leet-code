/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    const nodes = []
    let _head = head
    while(_head !== null){
        nodes.push(_head)
        _head = _head.next
    }

    const leftRem = nodes.slice(0, Math.max(left-1, 0))
    const rightRem = nodes.slice(right, nodes.lenght)
    const targets = nodes.slice(Math.max(left-1, 0),right).reverse()


    const reordered = [...leftRem, ...targets, ...rightRem]


    reordered.forEach((_,idx)=>{
        // NOTE:: init links
        reordered[idx].next = null
    })

    reordered.forEach((_,idx)=>{

        if(reordered.length !== idx + 1)
            reordered[idx].next = reordered[idx+1]
        else
            reordered[idx].next = null
    })

    return reordered[0]
};
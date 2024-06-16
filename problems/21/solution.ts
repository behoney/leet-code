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

function mergeTwoLists(
  list1: ListNode | null,
  list2: ListNode | null
): ListNode | null {
  const arr = [];
  while (list1 || list2) {
    if (list1) {
      arr.push(list1.val);
      list1 = list1.next;
    }
    if (list2) {
      arr.push(list2.val);
      list2 = list2.next;
    }
  }

  if (!arr.length) return null;

  arr.sort((a, b) => a - b);

  let head = new ListNode(arr.pop(), undefined);

  while (arr.length) {
    head = new ListNode(arr.pop(), head);
  }
  return head;
}


// rep 2 in JS

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    const accList = []
    spreadingHelper(list1, accList)
    spreadingHelper(list2, accList)

    if(!accList.length) return null

    accList.sort((a,b)=>a-b)

    const head = new ListNode(accList[0], undefined)
    let prevNode = head

    accList.forEach((val, idx)=>{
        if(idx === 0) return;

        const curNode = new ListNode(val, undefined)
        prevNode.next = curNode
        
        prevNode = curNode
    })

    return head;
};

const spreadingHelper = (listNode, accList = []) => {
    listNode && accList.push(listNode.val)
    if(listNode?.next) spreadingHelper(listNode.next, accList)
}
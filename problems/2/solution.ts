/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    const parseList = (list, arr) => {
        // console.log(list, arr);
        if (!list.next) {
            arr.unshift(list.val);
            return;
        }
        arr.unshift(list.val);
        parseList(list.next, arr);
    };

    const arr1 = [],
        arr2 = [];

    parseList(l1, arr1);
    parseList(l2, arr2);

    const result = (BigInt(arr1.join('')) + BigInt(arr2.join('')))
        .toString()
        .split('')
        .reverse();

    let head;

    while (result.length) {
        const val = parseInt(result.pop())
        if (!head) head = new ListNode(val, undefined);
        else head = new ListNode(val, head);
    }

    return head;
};

/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     next: Node | null
 *     random: Node | null
 *     constructor(val?: number, next?: Node, random?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *         this.random = (random===undefined ? null : random)
 *     }
 * }
 */

function copyRandomList(head: Node | null): Node | null {
  if (!head) return null;

  let newCurrent = null, newHead = null, newPrev = null;
  let current = head;

  while (current !== null) {
    const newNode = new Node(current.val, undefined, undefined)
    if (newHead === null) newHead = newNode
    newCurrent = newNode;
    if (newPrev !== null)
      newPrev.next = newCurrent;

    current = current.next;
    newPrev = newCurrent;
    newCurrent = newCurrent.next;
  }

  const getDistance = (head: Node, target: Node): number => {
    let ptr = head;
    let count = 0;
    while (ptr !== target) {
      ptr = ptr.next;
      count++
    }
    return count;
  }


  current = head;
  newCurrent = newHead;

  while (current !== null) {
    if (current.random === null) {
      newCurrent.random = null;
      current = current.next;
      newCurrent = newCurrent.next;
    }

    else {
      const dist = getDistance(head, current.random)
      let count = 0, ptr = newHead;
      while (count < dist) {
        ptr = ptr.next;
        count++;
      }
      newCurrent.random = ptr
      current = current.next;
      newCurrent = newCurrent.next;
    }

  }

  return newHead;
};
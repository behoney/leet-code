/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */


class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
  }
}

class BSTIterator {
  trav: number[] = [];
  travPtr: number = 0;

  constructor(root: TreeNode | null) {
    this.buildTrav(root);
  }

  buildTrav(node: TreeNode): void {
    if (!node) return;

    if (node.left) this.buildTrav(node.left);
    this.trav.push(node.val)
    if (node.right) this.buildTrav(node.right);
  }

  next(): number {
    return this.trav[this.travPtr++];
  }

  hasNext(): boolean {
    return this.travPtr < this.trav.length;
  }
}

/**
* Your BSTIterator object will be instantiated and called as such:
* var obj = new BSTIterator(root)
* var param_1 = obj.next()
* var param_2 = obj.hasNext()
*/
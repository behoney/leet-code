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

function isSymmetric(root: TreeNode | null): boolean {
  if (!root) return false;

  const compare = (left, right) => {
    return (left?.val == right?.val);
  }

  const symCheck = (left: TreeNode | null, right: TreeNode | null, result = true) => {

    if (!left || !right) {
      return result && compare(left, right);
    }

    const cResult = compare(left, right)

    return result && symCheck(left.left, right.right, cResult) && symCheck(left.right, right.left, cResult);
  }


  const left = root.left;
  const right = root.right;

  return symCheck(left, right, true);

};
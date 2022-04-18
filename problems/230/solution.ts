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

function kthSmallest(root: TreeNode | null, k: number): number {
  if (!root) return null;

  const trav = [];
  const dfs = (node) => {
    if (node === null) return;
    if (node.left) dfs(node.left);
    trav.push(node.val);
    if (node.right) dfs(node.right);

    // console.log(trav);
  }

  dfs(root)
  trav.sort((a, b) => a - b);
  return trav[k - 1];
};
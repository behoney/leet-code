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

function sumOfLeftLeaves(root: TreeNode | null): number {

  let result = 0;
  const dfs = (node, isLeftLeaf = false) => {
    if (!node) return;
    if (!node.left && !node.right && isLeftLeaf) result += node.val
    if (node.left) dfs(node.left, true)
    if (node.right) dfs(node.right, false)
  }
  dfs(root);
  return result;
};
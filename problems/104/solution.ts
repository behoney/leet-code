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

function maxDepth(root: TreeNode | null): number {
  if(!root) return 0;

  const dfs = (node, depth = 0): number => {
    if (!node) return depth;
    const store = []
    if (node.left) store.push(dfs(node.left, depth + 1))
    if (node.right) store.push(dfs(node.right, depth + 1))
    return Math.max(...store, depth)
  }

  return dfs(root) + 1;
};
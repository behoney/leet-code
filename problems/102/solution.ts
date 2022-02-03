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

function levelOrder(root: TreeNode | null): number[][] {
  const result = [];
  if (!root) return result;

  const dfs = (node, depth = 1): void => {
    if (!node) return;
    if (result.length < depth) result.push([])
    result[depth - 1].push(node.val);

    if (node.left) dfs(node.left, depth + 1);
    if (node.right) dfs(node.right, depth + 1);
  }

  dfs(root);
  return result;
};
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

function preorderTraversal(root: TreeNode | null): number[] {
  const result = [];
  if (!root) return result;

  const bfs = (node: TreeNode): void => {
    if (!node) return;
    result.push(node.val);
    if (node.left) bfs(node.left);
    if (node.right) bfs(node.right);
  };

  bfs(root);

  return result;
};
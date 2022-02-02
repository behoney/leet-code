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

function inorderTraversal(root: TreeNode | null): number[] {
  const result = []

  if (!root) return result;

  const dfs = (node: TreeNode): void => {
    if (!node) return;
    if (node.left) {
      dfs(node.left)
    }
    result.push(node?.val)
    if (node.right) dfs(node.right)

  }

  dfs(root);

  return result;

};
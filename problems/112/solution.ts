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

function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  let result = false;
  const isTarget = (val) => val == targetSum
  const isLeaf = (node) => !node.left && !node.right

  const dfs = (node: TreeNode | null, sum = 0) => {

    if (isLeaf(node))
      result = result || isTarget(sum + node.val);

    if (result) return;

    if (node) {
      if (node.left) dfs(node.left, sum + node.val)
      if (node.right) dfs(node.right, sum + node.val)
    }
  }

  dfs(root)

  return result;
};
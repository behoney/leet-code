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

function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  const swap = (node) => {
    // console.log("swap", node);
    const temp: TreeNode | null = node.left;
    node.left = node.right;
    node.right = temp;
    // console.log("swap result", node);
  }

  const dfs = (node) => {

    // console.log(node);
    if (node && (node.left || node.right)) {
      dfs(node.left)
      dfs(node.right)
      swap(node)
    }
  }

  dfs(root)

  return root;
};
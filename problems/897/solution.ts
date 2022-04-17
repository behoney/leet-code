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

 function increasingBST(root: TreeNode | null): TreeNode | null {
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
  const newRoot = new TreeNode(trav[0]);
  let ptr = newRoot;

  for (let i = 1; i < trav.length; i++) {
    const node = new TreeNode(trav[i]);
    ptr.right = node;
    ptr = node;
  }

  return newRoot;
};
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function (root) {
  const dfs = [];

  if (root === null) return dfs;

  const inorder = (node, dfs) => {
    if (node.left !== null) inorder(node.left, dfs);
    dfs.push(node.val);
    if (node.right !== null) {
      inorder(node.right, dfs);
    }
    return;
  };

  inorder(root, dfs);

  return dfs;
};

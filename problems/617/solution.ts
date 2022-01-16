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

function mergeTrees(
  root1: TreeNode | null,
  root2: TreeNode | null
): TreeNode | null {
  if (!root1) return root2;
  if (!root2) return root1;
  if (!root1 && !root2) return null;

  const sumValue = (node1, node2) => {
    if (!node1) return node2.val;
    if (!node2) return node1.val;
    return node1?.val + node2?.val;
  };

  const merge = (node1, node2) => {
    if (node1 == null && node2 == null) {
      return null;
    }
    if (node1 == null) return node2;
    if (node2 == null) return node1;

    const node = new TreeNode(
      sumValue(node1, node2),
      merge(node1.left, node2.left),
      merge(node1.right, node2.right)
    );

    return node;
  };

  const root = new TreeNode(
    sumValue(root1, root2),
    merge(root1.left, root2.left),
    merge(root1.right, root2.right)
  );

  return root;
}

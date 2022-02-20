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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  if (!root || !p || !q) return null;

  const pPath = [];
  const qPath = [];

  const search = (node, target, path) => {
    // console.log("iter", node?.val, target, path);

    if (!node) console.error("wrong input");

    path.push(node.val);
    if (node.val == target) {
      return node;
    }

    if (node.val < target) return search(node.right, target, path);
    else return search(node.left, target, path);

  }

  search(root, p.val, pPath);
  // console.log(pPath);
  search(root, q.val, qPath);
  // console.log(qPath);

  const result = pPath.filter(e => qPath.includes(e)).reverse()[0];
  // console.log("result", result, search(root, result, []));



  return search(root, result, []);

};
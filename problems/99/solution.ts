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

/**
 Do not return anything, modify root in-place instead.
 */
function recoverTree(root: TreeNode | null): void {
  const trav = [];
  const inOrderTrav = (node, correction = false) => {
    if (!node) return;

    // if (correction) console.log(node, candidates, candidates.includes(node.val));

    if (node.left) inOrderTrav(node.left, correction)

    if (!correction) trav.push(node.val)
    else if (candidates.includes(node.val)) {
      // console.log("before", node.val, node);
      node.val = candidates[candidates.indexOf(node.val) === 0 ? 1 : 0]
      // console.log("change", node.val, node);
    }

    if (node.right) inOrderTrav(node.right, correction)
  }
  inOrderTrav(root);
  // console.log("trav", trav);



  const candidates = [];
  for (let i = 0; i < trav.length - 1; i++) {
    if (trav[i] > trav[i + 1]) {
      if (candidates.length === 0) candidates.push(trav[i])
      else candidates.push(trav[i + 1])
    }
  }
  // console.log("candidates", candidates);
  if (candidates.length === 1) candidates.push(trav[trav.indexOf(candidates[0]) + 1]);
  // console.log("updated candidates", candidates);
  inOrderTrav(root, true)

  return;
};
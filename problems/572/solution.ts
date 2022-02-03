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

//  [3,4,5,1,2]
//  [4,1,2,1]

// 3
// 4   5
// 1 2

// 4
// 1 2
// 1
function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  if (!root) return root == subRoot;

  const compareTree = (node1, node2): boolean => {
    // console.log(node1?.val, node2?.val);

    if (!node1) return !node2;
    if (!node2) return false;
    let result = node1.val == node2.val;
    if (result && (node1.left || node2.left)) result = result && compareTree(node1.left, node2.left);
    if (result && (node1.right || node2.right)) result = result && compareTree(node1.right, node2.right);
    return result;
  }

  const target = subRoot.val;

  const searchRoot = (node) => {
    if (!node) return;
    if (node.val == target && compareTree(node, subRoot)) return true;

    let result = false;
    if (node.left) result = result || searchRoot(node.left);
    if (node.right) result = result || searchRoot(node.right);

    return result;
  }

  return searchRoot(root);

};
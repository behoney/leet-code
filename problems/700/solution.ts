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

function searchBST(root: TreeNode | null, val: number): TreeNode | null {
    let result = null;
    const findVal = (node) => {
        if (result || !node) return;
        if (node.val == val) {
            result = node
        }
        if (node.left) findVal(node.left)
        if (node.right) findVal(node.right)
    }

    findVal(root);
    return result;
};
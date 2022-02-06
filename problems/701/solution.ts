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

function insertIntoBST(root: TreeNode | null, val: number): TreeNode | null {
    const newNode = new TreeNode(val, null, null);
    let isCompleted = false;
    if (!root) return newNode;

    const pushNode = (node) => {
        if (!node || isCompleted) {
            return;
        }

        if (node.val < val) {
            if (node.right) pushNode(node.right)
            else { node.right = newNode; isCompleted = true; }
        }
        else {
            if (node.left) pushNode(node.left)
            else { node.left = newNode; isCompleted = true; }
        }
    }

    pushNode(root);
    return root;
};
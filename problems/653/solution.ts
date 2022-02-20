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

function findTarget(root: TreeNode | null, k: number): boolean {
    const trav = [];


    if (!root || (!root.left && !root.right)) return false;
    const dfs = (node) => {
        if (!node) return;
        trav.push(node.val)

        if (node.right) dfs(node.right)
        if (node.left) dfs(node.left)
    }
    dfs(root);

    // console.log(trav);



    // get two of some
    for (let i = 0; i < trav.length; i++) {
        for (let j = i + 1; j < trav.length; j++) {
            if (trav[i] + trav[j] == k) return true;
        }
    }



    return false;

};
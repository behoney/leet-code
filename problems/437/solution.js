// NOTE:: rep1 ~ 16min 15sec
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

function pathSum(root: TreeNode | null, targetSum: number): number {
    if(!root) return 0;

    let count = 0;

    const dfs = (node, trav = [])=>{

        const _trav = trav.map((val)=>{
            return val+node.val
        })
        _trav.push(node.val)

        count += _trav.filter(val => val === targetSum).length;
        
        if(node.left) dfs(node.left, _trav)
        if(node.right) dfs(node.right, _trav)
    }

    dfs(root)

    return count
};
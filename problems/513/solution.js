// NOTE:: rep1 ~ 6min 36sec
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
 * @return {number}
 */
var findBottomLeftValue = function(root) {
    if(!root.left && !root.right ) return root.val
    
    let maxDepth = 0
    const trav = new Map()

    const dfs = (node, depth = 0) =>
    {
        maxDepth = Math.max(maxDepth, depth)
        if(node.left) dfs(node.left, depth + 1)

        if(!trav.has(depth)) trav.set(depth, [])
        trav.get(depth).push(node.val)
        
        if(node.right) dfs(node.right, depth + 1)
    }

    dfs(root)

    return trav.get(maxDepth)[0]
};
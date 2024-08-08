// NOTE:: rep1 in 7min 21sec
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


var rightSideView = function(root) {
    if(!root) return []

    const trav = new Map()
    let maxDepth = 0

    const inOrderDfsTraversal = (node, depth = 0)=>{
        maxDepth = Math.max(maxDepth, depth)
        if(!trav.has(depth)) trav.set(depth, [])
        
        node?.left && inOrderDfsTraversal(node?.left, depth+1)
        trav.get(depth).push(node?.val)
        node?.right && inOrderDfsTraversal(node?.right, depth+1)
    }

    inOrderDfsTraversal(root)

    const result = new Array(maxDepth+1).fill(0)

    for(let i = 0 ; i < maxDepth+1; i++){
        result[i] = trav.get(i).at(-1)
    }

    return result
};
// NOTE:: rep1, 7min 40sec
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
var maxLevelSum = function(root) {
    const sums = new Map()
    
    const handleNodeValue = (val, depth)=>{
        if(!sums.has(depth)) sums.set(depth, val)
        else sums.set(depth, sums.get(depth) + val)
    }

    const inOrderDFS = (node, depth = 0) => {
        if(node.left) inOrderDFS(node.left, depth + 1)
        handleNodeValue(node.val, depth)
        if(node.right) inOrderDFS(node.right, depth + 1)
    }

    inOrderDFS(root)

    let result = 0
    for( const [key, val] of [...sums.entries()].sort((a,b)=> a[0] - b[0]) )
    {
        if(sums.get(result) < val)
            result = key
    }

    return result + 1
};
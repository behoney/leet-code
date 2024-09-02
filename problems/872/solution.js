// NOTE:: rep1 ~ 5min 25sec
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var leafSimilar = function(root1, root2) {
    const traverses = [[],[]]
    const preorderDFS = (node, id = 0)=>{
        if(!node.left && !node.right) traverses[id].push(node.val)
        if(node.left) preorderDFS(node.left, id)
        if(node.right) preorderDFS(node.right, id)
    }

    preorderDFS(root1, 0)
    preorderDFS(root2, 1)

    return traverses[0].toString() === traverses[1].toString()
};
// NOTE:: rep1, 5min 9sec
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
var getMinimumDifference = function(root) {
    const trav = []

    const inOrderTrav = (node) =>{
        if(node.left) inOrderTrav(node.left)
        trav.push(node.val)
        if(node.right) inOrderTrav(node.right)
    }

    inOrderTrav(root)

    const result = new Array(trav.length).fill(Infinity)

    for(let i=1 ; i <trav.length; i++){
        for(let j=0; j < i; j++){
            result[i] = Math.min(result[i], Math.abs(trav[i]-trav[j]))
        }
    }

    return Math.min(...result)
};
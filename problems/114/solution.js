// NOTE:: rep1: 4min 29sec
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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function(root) {
    if(!root) return;

    const traverse = []

    const preorderDFS = (node)=>{
        traverse.push(node)
        if(node?.left) preorderDFS(node.left)
        if(node?.right) preorderDFS(node.right)
    }

    preorderDFS(root)
    
    root.left = null;
    for(let i=1; i<traverse.length; i++){
        traverse[i-1].right = traverse[i]
        traverse[i].left = null
    }
};
// NOTE:: rep1 ~ 8min 57sec
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
var sumNumbers = function(root) {
    if(!root) return 0

    const paths = []

    const dfs = (node, path = []) =>{
        path.push(node.val)
        if(!node.left && !node.right)
            paths.push(path)
        else {
            if(node.left) dfs(node.left, [...path])
            if(node.right) dfs(node.right, [...path])
        }
    }
    
    const getValueFromPath = (path) => {
        return path.reverse().reduce((acc,cur,idx)=>{
            return acc + cur * ( 10 ** (idx) )
        }, 0)
    }

    dfs(root)

    return paths.reduce((acc,path)=>{
        return acc + getValueFromPath(path)
    }, 0)
};
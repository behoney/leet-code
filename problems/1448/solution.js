// rep1 ~ 4min 45sec
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
var goodNodes = function(root) {
    const goodNodes = new Set()

    const dfs = (node = root, path = []) => {
        if( node.val >= Math.max(...path) ){
            goodNodes.add(node)
        }
        if(node.left) dfs(node.left, path.concat(node.val))
        if(node.right) dfs(node.right, path.concat(node.val))
    }

    dfs()
    // console.log(goodNodes)
    return goodNodes.size
};
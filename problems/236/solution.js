// Rep1 ~ 34min 9sec
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    const queue = []    
    const paths = { p: undefined, q: undefined}
    
    const preOrderDfs = (node, path = []) => {
        if(node.val === p.val) { paths.p = path.concat(node.val) }
        if(node.val === q.val) { paths.q = path.concat(node.val) }
        if(!!paths.p && !!paths.q) return;

        const newPath = path.concat(node.val)
        if(node.left) preOrderDfs(node.left, newPath)
        if(node.right) preOrderDfs(node.right, newPath)
    }

    preOrderDfs(root)

    const dfs = (node = root, val)=>{
        if(node.val === val) return node
        const left = (node.left && dfs(node.left, val))
        const right = (node.right && dfs(node.right, val))
        return left || right
    }

    for(let i=0; i < paths.p.length; i++){
        if(paths.q.includes(paths.p.at(paths.p.length - 1 - i))){
            return dfs(root, paths.p.at(paths.p.length - 1 - i))
        }
    }

    return 0
};
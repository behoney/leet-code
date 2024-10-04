// Rep1 ~ 28min 51sec
// NOTE:: rep2 required
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    if(!preorder.length) return new TreeNode()

    const helper = (preorder, inorder) =>{
        if(!preorder.length || !inorder.length) return null

        const _val = preorder.shift()
        const idx = inorder.findIndex(val => val === _val)
        const root = new TreeNode(inorder.at(idx))
        const lefts = inorder.slice(0,idx)
        const rights = inorder.slice(idx+1)
        
        root.left = helper(preorder, lefts)
        root.right = helper(preorder, rights)

        return root
    }    

    return helper(preorder, inorder);
};
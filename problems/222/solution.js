// Rep1 ~ 4min 38sec
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
var countNodes = function(root) {
    const queue = []
    let count = 0
    queue.push(root)

    let ptr
    while(ptr = queue.shift()){
        ptr.left && queue.push(ptr.left)
        ptr.right && queue.push(ptr.right)
        count++
    }

    return count
};

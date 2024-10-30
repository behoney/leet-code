// Rep1 ~ 3min 6sec
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
var averageOfLevels = function(root) {
    const queue = []
    const trav = [[]]
    let depth = 0
    queue.push(root)

    const tempQueue = []
    while(queue.length)
    {
        const node = queue.pop()

        trav.at(depth).push(node.val)
        node.left && tempQueue.push(node.left)
        node.right && tempQueue.push(node.right)

        if(!queue.length){
            queue.push(...tempQueue)
            tempQueue.length = 0
            trav.push([])
            depth++
        }
    }


    return trav.filter(arr => !!arr.length)
            .map(arr =>
                arr.reduce((acc,cur)=>acc+cur, 0) / arr.length
            )
};
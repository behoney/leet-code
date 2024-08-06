// NOTE:: too long to solve this. rep2 required

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number} n
 * @return {TreeNode[]}
 */
var allPossibleFBT = function(n) {
    if(n % 2 === 0) return []
    else if (n === 1) return [new TreeNode(0)]

    const result = []

    for(let i=1; i < n; i = i+2)
    {
        const lefts = allPossibleFBT(i)
        const rights = allPossibleFBT(n-i-1)

        for(const left of lefts){
            for(const right of rights)
            {
                result.push(new TreeNode(0, left, right))
            }
        }
    }
    
    return result
};
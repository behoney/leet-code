/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */

const helper = (nums)=>{
    if(!nums.length) return null
    else if(nums.length === 1)
        return new TreeNode(nums[0], null, null)
    else
    {
        const idx = Math.floor(nums.length / 2)
        return new TreeNode(nums[idx], helper(nums.slice(0,idx)), helper(nums.slice(idx+1, nums.length)))
    }
}

var sortedArrayToBST = function(nums) {
    if(!nums.length) return new TreeNode()
    const headIdx = Math.floor(nums.length / 2)
    const head = new TreeNode(nums[headIdx], helper(nums.slice(0, headIdx)), helper(nums.slice(headIdx+1, nums.length)))

    return head
};
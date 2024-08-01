// NOTE:: rep2, (12min 16sec)

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length <= 2) return Math.max(...nums)

    const results = new Array(nums.length).fill(0)
    results[0] = nums[0]
    results[1] = nums[1]
    
    for(let i=2; i < nums.length; i++){
        results[i] = Math.max(results[i-1], results[i-2] + nums[i], i >= 3 ? results[i-3]+ nums[i] : 0)
    }

    return Math.max(...results)
};
// NOTE:: rep1 ~ 17min
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    if(nums.length === k) return nums.reduce((acc,cur)=>acc+cur,0)/k

    let max = -Infinity
    let sum = 0
    for(let i=0 ; i< k; i++){
        sum += nums[i]
    }
    max = Math.max(max, sum)

    for(let i=1; i <= nums.length - k ; i++){
        sum -= nums[i-1]
        sum += nums[i+k-1]
        max = Math.max(max, sum)
    }

    return max / k
};
// NOTE:: rep1 ~ 4min 41sec
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    const max = Math.max(...nums)
    
    for(let i=0; i<max; i++){
        if(!nums.includes(i)) return i
    }

    return max + 1
};
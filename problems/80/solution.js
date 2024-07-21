/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(!nums.length) return 0;
    else if (nums.length === 1) return 1;

    let store = nums[0];
    let count = 0;
    for(let i=0; i< nums.length; i++){
        if(store !== nums[i]){
            count = 1;
            store = nums[i];
            continue;
        }
        
        if(count > 1)
        {
            nums[i] = Infinity
        }

        count++;        
    }

    nums.sort((a,b)=> a - b)
    const dupLength = nums.filter(val => val !== Infinity).length

    return dupLength
};
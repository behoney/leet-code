// NOTE:: rep1 ~ 23min 39sec
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    if(nums.length < 2) return 0
    const validNums = nums.filter(val => val < k)
    const memory = new Map()
    let count = 0

    const memoryHelper = (i)=>{
        if(!memory.has(k - validNums[i]))
            memory.set(k - validNums[i], [i])
        else
            memory.get(k - validNums[i]).push(i)
    }

    for(let i=0; i < validNums.length; i++)
    {
        if(!memory.has(validNums[i]))
        {
            memoryHelper(i)
            continue
        }
        
        if(memory.get(validNums[i]).length){
            count++;
            const idx = memory.get(validNums[i]).pop()
            validNums[idx] = Infinity
            validNums[i] = Infinity
        } else {
            memoryHelper(i)
        }
    }

    return count
};
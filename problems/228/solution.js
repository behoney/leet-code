// NOTE:: rep1, 8min 20sec
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function(nums) {
    return nums.reduce((acc,cur)=>{
        if(!acc.length){
            acc.push([cur])
            return acc
        }

        const targetArr = acc.at(-1)
        if(targetArr.at(-1) + 1 === cur)
        {
            targetArr.push(cur)
            return acc
        }
        else
        {
            acc.push([cur])
            return acc
        }
    }
    , [])
    .map(arr=>{
        if(arr.length === 1) return `${arr.at(0)}`
        return `${arr.at(0)}->${arr.at(-1)}`
    })
};
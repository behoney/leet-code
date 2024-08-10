// NOTE:: rep3, 10min 44sec
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    const result = new Array(nums.length).fill(1)


    for(let i = 1 ; i < nums.length ; i ++){
        for(let j = 0 ; j < i ; j++){
            if(nums[i] > nums[j])
            {
                result[i] = Math.max(result[i], result[j]+1)
            }
        }
    }

    return Math.max(...result)
};


// NOTE:: rep2 failed: 15min 30sec
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var lengthOfLIS = function(nums) {
//     const results = new Array(nums.length)
    
//     if(nums.length === 1) return 1

//     // NOTE:: result[x] = [len, lastNum]
//     results[0] = [1, nums[0]]
//     results[1] = nums[0] < nums[1] ? [2, nums[1]] : [1, Math.min(nums[0], nums[1])]

//     for(let i = 2; i < nums.length; i++){
//         const num = nums[i]

//         if(results[i-1][1] < num){
//             results[i] = [results[i-1][0] + 1, num]
//         }
//         else{
//             if(results[i-2][1] < num){
//                 results[i] = [results[i-2][0] + 1, num]
//             }
//             else results[i] = [results[i-1][0], Math.min(results[i-2][1], num)]
//         }

//         console.log(i, `(${num})`, results)
//     }

//     return results.at(-1)[0]
// };



// NOTE:: rep1 failed - 46min
// /**
//  * @param {number[]} nums
//  * @return {number}
//  */
// var lengthOfLIS = function(nums) {
//     const result = []
//     for(let i = 0 ; i < nums.length; i++){ result.push([-Infinity]) }

//     result[0].push(nums[0])

//     for(let i = 1; i < nums.length; i++){
//         const num = nums[i]
//         const sorted = [...result].sort((a,b) => b.length - a.length)
//         console.log("sorted",sorted)
//         const maxLen = sorted[0].length

//         const currentBest = sorted[0]
//         for(const arr of sorted){
//             if(
//                 currentBest.length === arr.length && 
//                 currentBest.at(-1) > arr.at(-1)
//             )
//             {
//                 currentBest.length = 0;
//                 currentBest.push(...arr)
//             }
//         }
//         console.log("currentBest", currentBest)
//         if(currentBest.at(-1) < num){
//             currentBest.push(num);
//             result[i].length = 0
//             result[i].push(...currentBest)
//         }
//         else
//         {
//             const cand = sorted.filter(arr => (arr.length + 1 === maxLen) && arr.at(-1) < num)
//             console.log("cand", cand)
//             if(!cand.length) 
//             {
//                 result[i].push(...currentBest)
//             }
//             else {
//                 const newBest = cand[0]
//                 for(const arr of cand){
//                     if(
//                         arr.at(-1) > newBest.at(-1)
//                     )
//                     {
//                         newBest.length = 0;
//                         newBest.push(...arr)
//                     }
//                 }

//                 newBest.push(num)
//                 console.log("newBest", newBest)
//                 result[i].length = 0
//                 result[i].push(...newBest)
//             }
//         }
//         console.log(i, ": result",result)
//     }

    
//     return Math.max(...result.map(arr => arr.length))
// };
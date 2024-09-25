// Rep1 ~ 56min 34sec
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var longestOnes = function(nums, k) {

    let lastZeros = 0
    for(let i = 1; i < nums.length; i++){
        if(nums.at(-1*i) === 0) lastZeros++
        else break;
    }
    if(lastZeros > k){
        while(lastZeros-- > k){
            nums.pop()
        }
    }

    if(nums.filter(val => val === 0).length <= k) return nums.length

    let maxStreak = 0
    for(let i = 0; i < nums.length; i++){
        let windowAcc = 0
        let flipCnt = 0

        for(let j = 0; i+j < nums.length ; j++){
            if(nums[i+j] === 0 && flipCnt === k){
                break;
            }
            
            windowAcc++

            if(nums[i+j] === 0)
                flipCnt++
        }
        maxStreak = Math.max(maxStreak, windowAcc)
    }

    return maxStreak

    // let turn = nums[0]
    // let cnt = nums[0]
    // const streaks = []
    // for(let i=1; i<nums.length; i++){
    //     if(turn !== nums[i]){
    //         streaks.push(cnt)
    //         cnt = nums[i] ? 1 : -1
    //     }
    //     else if(turn === nums[i])
    //         cnt += nums[i] === 1 ? 1 : -1

    //     turn = nums[i]
    // }
    // cnt && streaks.push(cnt)

    // console.log(streaks)
    // if(k === 0) return streaks.length ? Math.max(...streaks) : 0
    
    // [0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1]
    // [ -1, 2, -2, 3, -1, 2, -3, 4]
    // [                           ]

};
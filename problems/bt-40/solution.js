// NOTE:: rep1 ~ 37min 20sec.
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
    candidates.sort((a,b)=>a-b)
    const _cand = candidates.filter(val => val <= target)
    const result = []
    const found = new Set()

    const helper = (cur, rem, sum = 0)=>{
        for(let i=0 ; i < rem.length; i++){
            const newSum = sum + rem[i]

            if(newSum > target) return;

            const newCur = [...cur, rem[i]]

            if(newSum === target)
            {
                const key = newCur.join(",")
                if(!found.has(key))
                {
                    found.add(key)
                    result.push(newCur)
                }
            }
            else if( i > 0 && rem[i] === rem[i-1]) {
                continue;
            }
            else
            {
                helper(newCur, rem.slice(i+1), newSum)
            }
        }
    }

    helper([], _cand)

    return result
};
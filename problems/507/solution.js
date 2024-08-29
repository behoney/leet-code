// rep1: 2min 31sec
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    const divisors = new Set()
    for(let i=1; i<num; i++){
        if(Number.isInteger(num/i))
        divisors.add(i)
    }

    return [...divisors].reduce((acc,cur)=>acc+cur, 0) === num
};
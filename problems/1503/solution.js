// rep1 ~ 16min 36sec
/**
 * @param {number} n
 * @param {number[]} left
 * @param {number[]} right
 * @return {number}
 */
var getLastMoment = function(n, left, right) {
    const tickConsumed = Math.max(...left, ...right.map(val => n - val))
    return tickConsumed

    // let tick = 0

    // const next = (left, right)=>{
    //     tick++
    //     const newLeft = left.map(val => val - 1).filter(val => val >= 0)
    //     const newRight = right.map(val => val + 1).filter(val => val <= n)
    //     if(newLeft.length || newRight.length) return next(newLeft, newRight)
    //     else return tick
    // }

    // return next(left, right) - 1
};
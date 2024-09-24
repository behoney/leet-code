// NOTE:: rep1 ~ 32min 57sec
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    if(guess(n) === 0) return n

    let count = 1
    let mid = n >> count

    while(guess(mid) !== 0){
        const half = Math.max(Math.floor(mid / (2 ** count++) ), 1)
        // console.log(mid, half, guess(mid))
        mid = mid + guess(mid) * half
    }

    return mid
};
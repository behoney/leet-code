// NOTE:: rep1 4min 22sec
/**
 * @param {number} n
 * @return {number}
 */

var numberOfCuts = function(n) {
    if(n === 1) return 0

    if(n%2 === 0) return n/2
    else return n
};
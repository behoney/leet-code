// NOTE:: rep2 ~ 24min 46sec
/**
 * @param {number} n
 * @return {number[][]}
 */
const isPrime = (val)=>{
    for(let i=2; i<=Math.sqrt(val); i++){
        if(val % i === 0) return false
    }
    return true
}

var findPrimePairs = function(n) {
    const pairs = []

    for(let i=2; i <= n/2; i++){
        if(isPrime(i) && isPrime(n-i)) pairs.push([i, n-i])
    }
    
    return pairs
};

 // // rep1: 31min ~ failed - time limit
// /**
//  * @param {number} n
//  * @return {number[][]}
//  */
// var findPrimePairs = function(n) {
//     const primes = new Set()
//     const notPrimes = new Set()
//     const primePairs = []

//     for(let i=2; i < n ; i++){
//         if(!notPrimes.has(i)){
//             primes.add(i)

//             for(let j=2; j*i < n ; j++)
//             {
//                 notPrimes.add(j*i)
//             }

//             if(primes.has(n-i)){
//                 primePairs.unshift([n-i, i])
//                 // primes.delete(n-i)
//                 // primes.delete(i)
//             }
//         }
//     }

//     return primePairs
// };
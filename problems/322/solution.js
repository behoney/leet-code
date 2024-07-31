// NOTE:: rep 1 failed. 25min 17sec
// NOTE:: rep 2, 11min 5sec

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

var coinChange = function(coins, amount) {
    if(amount === 0) return 0

    const arr = new Array(amount+1).fill(amount+1)
    arr[0] = 0

    for(let i=1; i<amount+1; i++){
        for(let j=0; j < coins.length; j++){
            if( coins[j] === i) {arr[i] = 1; break;}
            else if(i - coins[j] >= 0) arr[i] = Math.min(arr[i], arr[i - coins[j]] + 1)
        }
    }

    // console.log(arr)

    return arr[amount] === (amount+1) ? -1 : arr[amount]
};
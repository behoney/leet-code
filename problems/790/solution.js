// Rep1 ~ 35min 37sec
/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    if(n === 1) return 1
    if(n === 2) return 2

    const dp = new Array(n).fill(0)
    dp[0] = 1
    dp[1] = 2
    dp[2] = 5
    
    // n = 1 ~ 1 =  l
    // n = 2 ~ 2 =  ll, O
    // n = 3 ~ 3 =  lll, Ol, lO,                    ~ X, XY                 ~ 5
    // n = 4 ~ 5 =  llll, Oll, lOl, llO, OO         ~ lX, Xl, lY, Yl, Z, Z' ~ 11
    // n = 5 ~   =  ...                                                     ~ 24
    
    for(let i=3; i<=n; i++){
        dp[i] = (2 * dp[i-1] + dp[i-3]) % ((10 ** 9) + 7)
    }

    return dp.at(n-1) 
};
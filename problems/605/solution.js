/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */

// NOTE:: dirty logic :(

const EMPTY_MARK = -1
 
var canPlaceFlowers = function(flowerbed, n) {
    if(n===0) return true
    if(flowerbed.length === 1 && flowerbed[0] === 0 && n <= 1)
    return true

    if((flowerbed.length > 1 && flowerbed[0] === 0 && flowerbed[1] === 0)){
        flowerbed[0] = 1
        n--;
    }

    for(let i=0; i<flowerbed.length; i++)
    {
        if(flowerbed[i] === 1)
            continue;
        else if(i > 0 && flowerbed[i-1] === EMPTY_MARK && flowerbed[i] === 0 && (i+1 >= flowerbed.length || flowerbed[i+1] === 0))
        {
            flowerbed[i] = 1
            n--;
        }
        else if(flowerbed)
        {
            flowerbed[i] = EMPTY_MARK
        }

        if(n <= 0) return true
    }
    return false
};
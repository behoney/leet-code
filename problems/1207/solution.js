// NOTE:: rep1 ~ 10min 59sec
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    if( arr.length === 1 ) return true;

    const occurrences = new Set()
    arr.sort()

    for(let i=0; i<arr.length; i++){
        let count = 1
        while(i+count < arr.length && arr[i] === arr[i + count]){
            count++
        }
        
        if(occurrences.has(count)) return false;
        occurrences.add(count)
        i = i + count - 1
    }

    return true;
};
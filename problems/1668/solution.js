// NOTE:: 9min 31sec
/**
 * @param {string} sequence
 * @param {string} word
 * @return {number}
 */

var maxRepeating = function(sequence, word) {
    const results = new Array(sequence.length).fill(0)

    for(let i=0; i<sequence.length; i++){
        const sliced = sequence.slice(i, i + word.length)
        if(sliced === word){
            results[i] = 1
            if(i >= word.length)
                results[i] = results[i] + results[i - word.length]
        }
    }
    
    return Math.max(...results)
};
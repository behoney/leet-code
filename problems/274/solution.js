// NOTE:: rep1 ~ 9min 45sec
/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
    citations.sort((a,b)=>b-a)
    let hIndex = 0

    for(let i=0; i<citations.length; i++){
        const h = citations.at(i)

        if( i+1 >= h ) return Math.max(h, hIndex)
        if( h > hIndex + 1) hIndex++
    }

    return hIndex
};
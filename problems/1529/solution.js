// NOTE:: rep1, 6min 56sec
/**
 * @param {string} target
 * @return {number}
 */
var minFlips = function(target) {
    const tokens = target.split("")
    let temp = tokens.at(0)
    let flipCount = 1

    for(let i=1; i<tokens.length; i++)
    {
        if(temp !== tokens[i]){
            temp = tokens[i];
            flipCount++;
        }
    }
    
    return tokens.at(0) === "0" ? flipCount - 1 : flipCount

    // Trial1: lower performance..
    // const splited = target.split("")
    // const tokens = splited.reduce((acc,cur)=>{
    //     if(!acc.length) return [cur]
        
    //     if(acc.at(-1) === cur) return acc
    //     else return acc.concat(cur)
    // },[])

    // return tokens.at(0) === "0" ? tokens.length - 1 : tokens.length
};
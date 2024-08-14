// NOTE:: rep1, 3min 43sec
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const results = new Map()

    for(const str of strs){
        const key = str.split("").sort().join()
        
        if(!results.has(key)) results.set(key,[])
        results.get(key).push(str)
    }

    return [...results.entries()].map(([key,val])=>val)
};
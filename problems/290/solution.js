// Rep1 ~ 13min 12sec
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
    const map = new Map()
    const words = s.trim().split(' ')

    for(let i=0; i < words.length; i++){
        const word = words.at(i)
        const hash = pattern.at(i)

        if(map.has(hash) && map.get(hash) !== word)
            return false
        else map.set(hash, word)
    }

    return map.size === (new Set(pattern.split(''))).size && map.size === (new Set([...map.values()])).size

};
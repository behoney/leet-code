// Rep1 ~ 6min 28sec

const vowels = ['a', 'e', 'i', 'o', 'u']
/**
 * @param {string} s
 * @return {string}
 */
const REPLACER = -1
var reverseVowels = function(s) {
    const vowelStack = []
    const chars = s.split('')
    for(let i=0; i<chars.length; i++){
        const char = chars.at(i)
        if(vowels.includes(char.toLowerCase())){
            vowelStack.push(char)
            chars[i] = REPLACER
        }
    }

    for(let i=0; i<chars.length; i++){
        if(chars.at(i) === REPLACER)
            chars[i] = vowelStack.pop()
    }

    return chars.join('')
};
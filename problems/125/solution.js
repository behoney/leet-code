// NOTE:: 16min 48sec
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alphabets = new RegExp('[0-9a-z]')
    const str = s.toLowerCase().split('').filter((char)=>alphabets.test(char)).join("")
    console.log(str)
    if(str.length % 2){
        return str.slice(0,(str.length-1) / 2) === (str.slice(1+(str.length-1)/2).split('').reverse().join(''))
    }
    else
        return str.slice(0,str.length / 2) === str.slice(str.length/2).split('').reverse().join('')
    
};
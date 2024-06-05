/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function(str1, str2) {
    const [longerStr, shorterStr] = str1.length > str2.length ? [str1, str2] : [str1, str2].reverse();

    return helper(longerStr, shorterStr) ?? ""
};

const CHECKER_CHARACTER = "x"

const helper = (str, divider)=>{
    if(!divider.length) return null;
    
    const checker = str.replaceAll(divider, CHECKER_CHARACTER)

    if(checker.split("").every(char => char === CHECKER_CHARACTER)) return divider
    else return helper(str, divider.slice(0,-1))
}
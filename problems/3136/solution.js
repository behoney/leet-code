// NOTE:: rep1 ~ 3min 31sec
/**
 * @param {string} word
 * @return {boolean}
 */
var isValid = function(word) {
    const isValidLength = word.length >= 3
    const isValidChars = (new RegExp("^[a-zA-Z0-9]*$", "g")).test(word)
    const isValidVowel = (new RegExp("[aeiouAEIOU]", "g")).test(word)
    const isValidConsonant = (new RegExp("[^aeiouAEIOU0-9]", "g")).test(word)

    return isValidLength && isValidChars && isValidVowel && isValidConsonant
};
// NOTE:: rep1, 2min 1sec
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(" ").filter(Boolean).reverse().join(" ")
};
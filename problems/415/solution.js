// NOTE:: rep1 ~ 3min 2sec
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function(num1, num2) {
    const _num1 = BigInt(num1)
    const _num2 = BigInt(num2)
    return (_num1 + _num2).toString()
};
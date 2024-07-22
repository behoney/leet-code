/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(!s || !t || s.length !== t.length) return false

    const charMap = new Map()
    const _s = [], _t = [];
    const preS = "S", preT = "T";

    for(let i=0;i<s.length; i++){
        

        if(charMap.get(preS+s[i]) !== undefined && charMap.get(preS+s[i]) === charMap.get(preT+t[i]))
        {
            _s.push(charMap.get(preS+s[i]))
            _t.push(charMap.get(preT+t[i]))
        }
        else if (!charMap.has(preS+s[i]) && !charMap.has(preT+t[i]))
        {
            charMap.set(preS+s[i], i)
            charMap.set(preT+t[i], i)
            _s.push(i)
            _t.push(i)
        }
        else{
            return false
        }
    }


    return JSON.stringify(_s) === JSON.stringify(_t)
};
// Rep1 ~ 7min 39sec
/**
 * @param {string} s
 * @return {string}
 */

const STAR_MARK = '*'
const REMOVAL_MARK = '-'

var removeStars = function(s) {
    const chars = s.split('').reverse()
    
    let cnt = 0
    for(let i=0; i<chars.length; i++){
        if(chars[i] === STAR_MARK)
                cnt++
        else if(cnt){
            if (chars[i] !== REMOVAL_MARK){
                chars[i] = REMOVAL_MARK
                cnt--
            }
        }
    }

    // console.log([...chars].reverse().join(''))

    return chars.filter((val)=> ![STAR_MARK, REMOVAL_MARK].includes(val)).reverse().join('')
};
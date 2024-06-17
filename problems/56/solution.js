const isOverlapped = (a,b) => {
    return a[1] >= b[0]
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    if(!intervals.length) return []

    intervals.sort((a,b)=> a[0] - b[0])
    return intervals.reduce((acc,cur)=>{
        if(!acc?.length) return [cur]
        else if(isOverlapped(acc.at(-1), cur)) {
            acc[acc.length - 1][1] = Math.max(acc.at(-1)[1], cur[1])
            return acc
        }
        else return acc.concat([cur])
    }, [])
};


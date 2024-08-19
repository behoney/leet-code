// NOTE:: rep1, 8min 17sec
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b)=>a[0] - b[0])
    const result = []
    result.push(intervals[0])

    for(let i=1; i<intervals.length; i++){
        const lastInterval = result.at(-1)
        const isMergeable = lastInterval[0] >= intervals[i][1] || lastInterval[1] >= intervals[i][0]
        if(isMergeable){
            lastInterval[0] = Math.min(lastInterval[0], intervals[i][0])
            lastInterval[1] = Math.max(lastInterval[1], intervals[i][1])
        }
        else result.push(intervals[i])
    }
    
    return result
};
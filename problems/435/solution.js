// NOTE:: rep1 ~ 24min 16sec
/**
 * @param {number[][]} intervals
 * @return {number}
 */

const getBiggerInterval = (interval1, interval2)=>{
    // NOTE:: bigger range doesn't mean more overlapped interval :(
    // return interval1[1] - interval1[0] > interval2[1] - interval2[0] ? interval1 : interval2
    return interval1[1] > interval2[1] ? interval1 : interval2
}

var eraseOverlapIntervals = function(intervals) {
    if(intervals.length < 2) return 0

    intervals.sort((a,b)=>a[0]-b[0])

    let count = 0

    for(let i=1; i < intervals.length; i++){
        let prevInterval
        for(let j = i-1; j >= 0; j--){
            prevInterval = intervals[j]
            if(prevInterval[0] !== prevInterval[1])
                break;
            else if(j === 0 && prevInterval[0] === prevInterval[1])
                return count
        }

        if(prevInterval[1] > intervals[i][0])
        {
            const biggerInterval = getBiggerInterval(prevInterval,intervals[i])
            biggerInterval[0] = Infinity
            biggerInterval[1] = Infinity
            count++   
        }
    }

    return count
};
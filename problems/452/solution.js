// NOTE:: rep2 ~ 2min 30sec
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=>a[0]-b[0])

    // [ [ 1, 6 ], [ 2, 8 ], [ 7, 12 ], [ 10, 16 ] ]
    const merged = []
    merged.push(points.at(0))

    for(let i=1; i<points.length; i++){

        if(merged.at(-1)[1] >= points.at(i)[0] )
        {
            merged.at(-1)[0] = Math.max(merged.at(-1)[0], points.at(i)[0])
            merged.at(-1)[1] = Math.min(merged.at(-1)[1], points.at(i)[1])
        }
        else merged.push([...points.at(i)])
    }

    // console.log(merged)

    return merged.length
};

// NOTE:: rep1 ~ 30min 49sec
/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    points.sort((a,b)=> a[0] - b[0])

    let count = 1

    console.log(points)

    for(let i=1; i<points.length; i++){
        if(points[i-1][1] >= points[i][0])
        {
            points[i][1] = Math.min(points[i-1][1], points[i][1])
        }
        else
            count++
    }

    return count
};
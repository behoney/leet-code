// NOTE:: rep1 ~ 30min 49sec
// NOTE:: rep2 required
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
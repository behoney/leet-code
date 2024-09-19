// NOTE:: rep1 ~ 40min 14sec. could be more performant
/**
 * @param {number[][]} times
 * @param {number} targetFriend
 * @return {number}
 */
var smallestChair = function(times, targetFriend) {
    if(times.length === 1) return 0

    const targetTime = times[targetFriend][0]
    times.sort((a,b)=> a[0] - b[0])

    if(times[0][0] === targetTime) return 0

    const seats = new Map()
    let seatNumber = 0
    seats.set(seatNumber++, times[0][1])

    for(let i=1; i<times.length; i++){
        let flag = false

        for(const [key, val] of seats){
            if(val <= times[i][0]){
                seatNumber = key
                flag = true
                break;
            }
        }

        if(times[i][0] === targetTime) return seatNumber

        seats.set(flag ? seatNumber : seats.size, times[i][1])
        seatNumber = seats.size
    }

    return seatNumber
};
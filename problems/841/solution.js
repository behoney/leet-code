// NOTE:: rep1 ~ 5min 45sec
/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    const visited = new Set()

    const helper = (keys)=>{
        const newKeys = keys.filter(key => !visited.has(key))

        for(const key of newKeys){
            visited.add(key)
            helper(rooms[key])
        }
    }

    visited.add(0)
    helper(rooms[0])

    return visited.size === rooms.length
    
};
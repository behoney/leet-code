// Rep1 ~ 30min 14sec
/**
 * @param {character[][]} maze
 * @param {number[]} entrance
 * @return {number}
 */
const EMPTY = "."
const MARK = "!"
const WALL = "+"
const seekEmpty = (maze, x, y)=>{
    const result = []
    if( x > 0 && maze[x-1][y] === EMPTY) result.push([x-1,y])
    if( y > 0 && maze[x][y-1] === EMPTY) result.push([x,y-1])
    if( x < maze.length - 1 && maze[x+1][y] === EMPTY) result.push([x+1,y])
    if( y < maze[0].length - 1 && maze[x][y+1] === EMPTY) result.push([x,y+1])
    return result
}

var nearestExit = function(maze, entrance) {
    const queue = []
    const countMap = new Map()
    const paths = seekEmpty(maze,entrance[0],entrance[1])
    queue.push(...paths)
    maze[entrance[0]][entrance[1]] = MARK
    
    for(const xy of paths)
        countMap.set(xy.join(','), 1)
    
    while(queue.length){
        const current = queue.shift()
        if(maze[current[0]][current[1]] === MARK) continue;

        if(current[0] === 0 || current[1] === 0 || current[0] === maze.length - 1 || current[1] === maze[0].length - 1) return countMap.get(current.join(','))

        maze[current[0]][current[1]] = MARK
        const paths = seekEmpty(maze,current[0],current[1])
        queue.push(...paths)
        
        for(const xy of paths)
            countMap.set(xy.join(','), countMap.get(current.join(',')) + 1)

    }

    return -1
};
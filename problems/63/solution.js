// Rep1 ~ 22min 12sec
/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

const OBSTACLE_MARK = -1

const getReachableCells = (grid,x,y, visited) => {
    const paths = []
    // if(x - 1 >= 0 && !visited.has(`${x-1},${y}`))
    //     grid[y][x-1]  !== OBSTACLE_MARK && paths.push([x-1, y])
    // if(y - 1 >= 0 && !visited.has(`${x},${y-1}`))
    //     grid[ y-1][x] !== OBSTACLE_MARK && paths.push([x, y-1])
    if(x + 1 < grid[0].length && !visited.has(`${x+1},${y}`))
        grid[y][x+1]  !== OBSTACLE_MARK && paths.push([x+1, y])
    if(y + 1 < grid.length && !visited.has(`${x},${y+1}`))
        grid[y+1][x]  !== OBSTACLE_MARK && paths.push([x, y+1])
    return paths
}

var uniquePathsWithObstacles = function(obstacleGrid) {
    if(obstacleGrid[0][0] === 1 || obstacleGrid.at(-1).at(-1) === 1) return 0

    const grid = obstacleGrid.map(row => row.map(val => val === 1 ? OBSTACLE_MARK : 0))
    const visited = new Set()
    
    grid[0][0] = 1
    
    for(let y = 0; y < grid.length; y++){
        for(let x = 0; x < grid[0].length; x++){
            
            if(visited.has(`${x},${y}`) || grid[y][x] === OBSTACLE_MARK) continue;
            visited.add(`${x},${y}`)
            const reachableCells = getReachableCells(grid, x, y, visited)
            for(const [_x,_y] of reachableCells){
                grid[_y][_x] += grid[y][x]
            }
            // console.log(grid, visited)
        }
        
    }

    return grid.at(-1).at(-1)
};

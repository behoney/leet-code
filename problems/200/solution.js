// NOTE:: rep1; 32min 3sec
/**
 * @param {character[][]} grid
 * @return {number}
 */


const lookupHelper = (map, i, j, id)=>{    
    if(map[i][j] === "0") return;
    else if (map[i][j] !== "1") return;

    map[i][j] = id
    if(i-1 >= 0 && map[i-1][j] === "1"){
        lookupHelper(map, i-1, j, id)
    }
    if(j-1 >= 0 && map[i][j-1] === "1"){
        lookupHelper(map, i, j-1, id)
    }
    if(i+1 < map.length && map[i+1][j] === "1"){
        lookupHelper(map, i+1, j, id)
    }
    if(j+1 < map[0].length && map[i][j+1] === "1"){
        lookupHelper(map, i, j+1, id)
    }
}

var numIslands = function(grid) {
    if(!grid.length || grid.flat().every(val => val === "0")) return 0

    const map = grid
    
    const width = map[0].length
    const height = map.length

    let islandID = 1
    
    for(let i=0; i<height; i++){
        for(let j=0; j<width; j++){
            if(map[i][j] === "1")
                lookupHelper(map, i, j, islandID++)
        }
    }

    return islandID - 1 ;
};
// NOTE:: rep1 ~ 9min 
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const visited = new Set()
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[0].length; j++){
            if(matrix[i][j] === 0 && !visited.has(`${i},${j}`))
            {
                for(let x=0; x<matrix.length; x++){
                    if(matrix[x][j] !== 0)
                        visited.add(`${x},${j}`)
                    matrix[x][j] = 0
                }
                for(let y=0; y<matrix[0].length; y++)
                {
                    if(matrix[i][y] !== 0)
                        visited.add(`${i},${y}`)
                    matrix[i][y] = 0
                }
            }
        }
    }    

    return matrix
};
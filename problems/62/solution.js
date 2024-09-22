// NOTE:: rep1 ~ 17min 54sec
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
    const matrix = new Array(m)
    for(let i=0; i<m; i++) matrix[i] = new Array(n).fill(0)

    matrix[0][0] = 1

    const updateNumOfPath = (x,y)=>{
        if(x>0) matrix[x][y] += matrix[x-1][y]
        if(y>0) matrix[x][y] += matrix[x][y-1]
    }

    for(let i=0; i<m; i++){
        for(let j=0; j<n; j++)
            updateNumOfPath(i,j)
    }

    

    return matrix[m-1][n-1]
};
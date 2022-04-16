function shiftGrid(grid: number[][], k: number): number[][] {

    const flat = grid.flat();
    const cycle = k % flat.length;
    if (cycle === 0) return grid;
    // console.log(cycle);

    for (let i = 0; i < cycle; i++) {
        const target = flat.pop();
        flat.unshift(target);
        // console.log(target, flat);
    }
    const result = [];
    let counter = 0;

    for (let i = 0; i < grid.length; i++) {
        const row = [];
        for (let j = 0; j < grid[0].length; j++) {
            row.push(flat[counter++]);
        }
        result.push(row);
    }
    // console.log(flat);
    // console.log(result);



    return result;
};
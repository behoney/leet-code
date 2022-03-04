const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const inputs = [];
let followingRows = -Infinity;

rl.on("line", function (x) {

    inputs.push(x)
    if (followingRows == -Infinity) followingRows = parseInt(x.split(' ').pop());
    // console.log(followingRows, inputs.length)

    if (inputs.length == followingRows + 1)
        rl.close();

}).on("close", function () {
    // console.log("inputs", inputs)
    const map = inputs.shift().split(' ').map(e => parseInt(e));
    const carrots = inputs.map(e => e.split(' ').map(e => parseInt(e)))
    solution(map, carrots);
    process.exit();
});



const solution = (map, carrots) => {
    // console.log( map, carrots );
    let minX = Infinity;
    let minY = Infinity;
    let maxX = -Infinity;
    let maxY = -Infinity;

    carrots.map((e) => {
        minX = Math.min(minX, e[0]);
        maxX = Math.max(maxX, e[0]);
        minY = Math.min(minY, e[1]);
        maxY = Math.max(maxY, e[1]);
    });
    console.log((maxX - minX + 2) * 2 + (maxY - minY + 2) * 2)

}
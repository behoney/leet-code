const moveVertical = (val, cur) => {
  cur[0] += val;
  if (cur[0] < -5) cur[0] = -5;
  if (cur[0] > 5) cur[0] = 5;
};
const moveHorizontal = (val, cur) => {
  cur[1] += val;
  if (cur[1] < -5) cur[1] = -5;
  if (cur[1] > 5) cur[1] = 5;
};

function solution(dirs) {
  if (dirs.length == 1) return 1;

  const dir = dirs.split("").reverse();

  const pathMap = [];
  pathMap.push([0, 0, "X"]);

  while (dir.length) {
    const move = dir.pop();

    const current = [...pathMap[pathMap.length - 1]];

    switch (move) {
      case "U":
        moveVertical(1, current);
        current[2] = "U";

        break;
      case "D":
        moveVertical(-1, current);
        current[2] = "D";

        break;
      case "R":
        current[2] = "R";
        moveHorizontal(1, current);

        break;
      case "L":
        moveHorizontal(-1, current);
        current[2] = "L";
        break;

      default:
        console.error("wrong input");
        break;
    }
    pathMap.push(current);
  }

  console.log(pathMap);

  const result = [];
  for (let i = 0; i < pathMap.length; i++) {
    let flag;

    flag =
      result.filter((e) => JSON.stringify(e) == JSON.stringify(pathMap[i]))
        .length != 0;

    if (!flag) result.push(pathMap[i]);
  }

  return result.length - 1;
}

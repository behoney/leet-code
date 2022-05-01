const resultStr = (s) => {
  const arr = s.split("");

  while (arr.some((e) => e === "#")) {
    if (arr.indexOf("#") === 0) arr.splice(arr.indexOf("#"), 1);
    else arr.splice(arr.indexOf("#") - 1, 2);
  }

  return arr.join("");
};

function backspaceCompare(s: string, t: string): boolean {

  return resultStr(s) === resultStr(t);
}

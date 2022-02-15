const getSS = (n) => {
  let sum = 0, num = n;
  while (num > 0) {
    const rem = num % 10
    sum += rem * rem
    num = Math.floor(num / 10)
  }
  return sum;
}

function isHappy(n: number): boolean {
  const obj = {};
  let num = n;
  while (obj[num] == undefined) {
    obj[num] = true;
    num = getSS(num);
    if (num == 1) return true;
  }
  return false;
};
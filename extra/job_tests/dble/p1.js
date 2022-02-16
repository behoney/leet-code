function solution(n) {
  const eachDigit = n.toString().split("");
  let result = 0;
  console.log(eachDigit);
  eachDigit.forEach((e) => {
    result += parseInt(e);
  });
  return result;
}

function reverseBits(n: number): number {
  console.log(Math.pow(2,32),n)
  return parseInt(n.toString(2).split("").reverse().join(""), 2);
}

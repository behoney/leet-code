function reverseBits(n: number): number {
  let str = n.toString(2);
  while (str.length < 32) {
    str = "0" + str;
  }
  return parseInt(str.split("").reverse().join(""), 2);
}

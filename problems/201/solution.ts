function rangeBitwiseAnd(left: number, right: number): number {
  if (left == 0 || right == 0) return 0;
  if (left == right) return right;

  const buf = right.toString(2).split('').reverse();
  for (let i = left; i <= right; i++) {
    const operand = i.toString(2).split('').reverse();
    while (operand.length < buf.length) operand.push('0');
    for (let j = 0; j < operand.length; j++) {
      if (buf[j] == "0" || operand[j] == "0") buf[j] = '0'
    }

    if (buf.every(e => e == '0')) return 0;
  }
  return parseInt(buf.reverse().join(''), 2);
};
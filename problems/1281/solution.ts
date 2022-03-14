function subtractProductAndSum(n: number): number {
  const digits = n.toString().split('').map(e => parseInt(e));

  const prod = (acc, e) => { return acc * e };
  const sum = (acc, e) => { return acc + e };

  return digits.reduce(prod) - digits.reduce(sum)
};
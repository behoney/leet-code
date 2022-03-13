function average(salary: number[]): number {
  salary.sort((a, b) => a - b);
  let result = 0;
  for (let i = 1; i < salary.length - 1; i++) {
    result += salary[i]
  }
  return result / (salary.length - 2)
};
const char = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

function convertToTitle(columnNumber: number): string {
  let num = columnNumber - Math.floor(columnNumber / char.length);
  const result = []
  while (num > 25) {
    result.push(char[(num) % char.length]);
    num -= 26 * Math.floor(num / char.length);
  }
  result.push(char[num - 1])

  return result.join('');
};
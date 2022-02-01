function isValid(s: string): boolean {
  const open = ['[', '(', '{'];
  const close = [']', ')', '}'];
  const stack = [];
  const arr = s.split('')

  while (arr.length > 0) {
    const target = arr.shift();
    if (open.indexOf(target) !== -1) {
      stack.push(target);
    }
    else if (close.indexOf(target) !== -1) {
      if (open[close.indexOf(target)] === stack.pop()) {
        continue;
      }
      else return false;
    }
    else console.error("unexpected input")
  }


  return stack.length == 0 ? true : false;
};
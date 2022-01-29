function firstUniqChar(s: string): number {
  if (s.length == 1) return 0;

  const set = s.split("");
  const visited = [];
  let idx = 0;
  while (set.length > 0) {
    const target = set.shift();
    if (set.indexOf(target) == -1 && visited.indexOf(target) == -1) return idx;

    visited.push(target);
    idx++;
  }

  return -1;
}

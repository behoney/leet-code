function canConstruct(ransomNote: string, magazine: string): boolean {
  const set = magazine.split("").sort();
  const target = ransomNote.split("").sort();

  for (const e of set) {
    if (target.indexOf(e) != -1) target[target.indexOf(e)] = "-";
    if (target.every((e) => e == "-")) return true;
  }

  return target.every((e) => e == "-");
}

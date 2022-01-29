function canConstruct(ransomNote: string, magazine: string): boolean {
  const set = magazine.split("");
  const target = ransomNote.split("");

  for (const e of set) {

    if (target.indexOf(e) != -1) target[target.indexOf(e)] = "-";
  }

  return target.every((e) => e == "-");
}

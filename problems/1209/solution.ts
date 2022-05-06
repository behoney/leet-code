function removeDuplicates(s: string, k: number): string {
  if (s.length === 1) return s;
  let str: string = s;
  const iterator = () => {
    if (str.length < k) return str;

    const store: string[] = new Array();
    const init = (newChar) => { store.length = 0; store[0] = newChar }
    init(str[0])
    for (let i = 1; i < str.length; i++) {
      if (store[0] === str[i]) {
        store.push(str[i])
        if (store.length === k) break;
      } else init(str[i])
    }

    if (store.length !== k) return str;

    else { str = str.replace(store.join(''), ""); return iterator(); }
  }

  iterator();
  return str;
};
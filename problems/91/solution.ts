
const charMap = {
  '1': [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9'],
  '2': [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6']
};

function numDecodings(s: string): number {
  if (s[0] === '0')
    return 0;
  if (s.length === 1) return 1;

  let result = 0;
  const arr = s.split('');
  const visited = new Array(arr.length).fill(0);

  const search = (idx = 0, jumped = false) => {
    if (result < 0) return;
    if (idx >= arr.length - 1) return;

    const target = arr[idx];
    const following = arr[idx + 1];

    // console.log("idx | target | following", idx, target, following, result);
    visited[idx] += 1;
    if (!jumped)
      search(idx + 1);

    if (charMap[target] !== undefined) {          // '1', '2' case
      if (following !== undefined && charMap[target].includes(following)) {
        result += 1;
        search(idx + 2, true);
      }
    }
    else if (following !== undefined && following === '0') {      // '3' ~ '9' + '0'
      console.log("following is not supported", idx);
      result = -Infinity;
      return;
    }
  }

  search();

  // for (let i = 0; i < arr.length - 1; i++) {

  //   if (arr[i] === '0') continue;

  //   const target = charMap[arr[i]];
  //   if (target === undefined) {
  //     if (arr[i + 1] === '0') return 0;
  //     // result += 1;
  //   }
  //   else if (target !== undefined) {
  //     result += target.includes(arr[i + 1]) ? result : 0;
  //   }
  // }

  // if (arr[arr.length - 1] !== '0')
  //   result += 1;

  console.log(visited);


  return result < 0 ? 0 : result + 1;
};

const genTestcase = () => {
  const set = [];
  const len = Math.floor(Math.random() * 49);
  // const len = 100;

  for (let i = 0; i < len; i++) {
    set.push(Math.floor(Math.random() * 27).toString())
  }

  return set.join('');
}
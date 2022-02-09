function generateParenthesis(n: number): string[] {
  if (n == 1) return ["()"];

  const nestedSets = [""];
  for (let i = 1; i <= n; i++) {
    const emptyArr = [];
    emptyArr.length = i
    const open: string = [...emptyArr].fill('(', 0, i).join('');
    const close: string = [...emptyArr].fill(')', 0, i).join('');
    nestedSets.push(open.concat(close))
  }

  // console.log(nestedSets);

  const idxResult:any = {};
  const getAllCases = (current = nestedSets[1].split('')) => {

    if (current.length == n * 2) {
      // console.log("origin", current);
      // console.log("sorted", current);

      idxResult[current.join('')] = true;
      return;
    }

    for (let i = 0; i < current.length; i++) {
      const prefix = [...current].slice(0, i);
      const postfix = [...current].slice(i, current.length);

      getAllCases([...prefix, ...nestedSets[1].split(''), ...postfix])
    }
  }

  getAllCases()
  // console.log(idxResult);

  return Object.keys(idxResult)


  // const result: Object = {}
  // const mapped = [...idxResult]
  //   .map(e => {
  //     const values = e.split('');
  //     const slot: number[] = [];
  //     for (let i = 0; i < n; i++)slot.push(0)
  //     for (const v of values) {
  //       slot[+v] += 1
  //     }


  //     const str = slot.map(e => {
  //       return nestedSets[e]
  //     })

  //     // console.log(slot, str);
  //     result[str.join('')] = true;
  //     // console.log(result);
  //   })



  // return Object.keys(result)
};
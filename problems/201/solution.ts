function rangeBitwiseAnd(left, right) {
  if (left == 0 || right == 0) return 0;
  if (left == right) return right;

  let result = right;
  for (let i = left; i <= right; i++) {
    // console.log(result.toString(2), i.toString(2))
    result = result & i
    if(result == 0) break;
  }

  return result;
};
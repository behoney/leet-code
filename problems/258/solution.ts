function addDigits(num: number): number {
  const n = num.toString().split('');
  let result = 0;
  for(const e of n) result+=+e;
  while(result>9){
      n.length = 0;
      n.push(...result.toString().split(''));
      result = 0;
      for(const e of n) result+=+e;
  }
  return result;
};
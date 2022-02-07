// const isPrimes = (n) => {
//   let val = n - 1;
//   while (val > 1) {
//     // if (n % val == 0) return false;
//     const dividedResult = n / val;
//     if (dividedResult == Math.floor(dividedResult)) return false;
//     val--;
//   }
//   return true;
// };

const isPrimes = (num) => {
    for (let i = 2, s = Math.sqrt(num); i <= s; i++)
        if (num % i === 0) return false;
    return num > 1;
};

const addAll = (acc, cur) => acc + cur;
const primes = [];

function solution(N, M) {
    // collect primes
    for (let i = N; i > 1; i--)
        if (i <= M && isPrimes(i)) primes.push(i);

        //   const resultArr = [];
    let result = 0;

    const getCombination = (idx, acc) => {
        if (acc >= M) {
            //   resultArr.push(current);
            result += acc == M ? 1 : 0;
            return;
        }

        // getCombination(idx + 1, [...current, primes[idx + 1]]);
        if (idx + 1 >= primes.length) return;
        getCombination(idx + 1, acc + primes[idx + 1]);
    };

    for (let i = 0; i < primes.length; i++) {
        getCombination(i, primes[i]);
    }

    return result;
}
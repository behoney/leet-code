const isPrimes = (n) => {
    let val = n - 1;
    while (val > 1) {
        // if (n % val == 0) return false;
        const dividedResult = n / val;
        if (dividedResult == Math.floor(n / val)) return false;
        val--;
    }
    return true;
};

const addAll = (acc, cur) => acc + cur;

function solution(N, M) {
    // collect primes
    const primes = [];
    for (let i = N; i > 1; i--)
        if (i <= M && isPrimes(i)) primes.push(i);

        //   const resultArr = [];
    let result = 0;

    const getCombination = (idx, current = []) => {
        const acc = current.reduce(addAll, 0);

        if (acc == M) {
            //   resultArr.push(current);
            result++;
            return;
        }
        if (acc > M) return;

        // getCombination(idx + 1, [...current, primes[idx + 1]]);
        if (idx + 1 < primes.length)
            getCombination(idx + 1, [acc, primes[idx + 1]]);
    };

    for (let i = 0; i < primes.length; i++) {
        getCombination(i, [primes[i]]);
    }

    return result;
}
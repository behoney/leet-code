function sortByBits(arr: number[]): number[] {
    if (arr.length === 1) return arr;

    const getOnesFromBinaryString = (str: string): number => {
        if (str.length === 0) return 0;
        let result = 0;
        for (let i = 0; i < str.length; i++)
            if (str[i] === '1') result++;
        return result;
    }

    const binString = arr.map(e => e.toString(2));

    const obj = {};
    let maxKey = -1;
    for (let i = 0; i < binString.length; i++) {
        const numOfOnes = getOnesFromBinaryString(binString[i])
        maxKey = Math.max(maxKey, numOfOnes);

        if (obj[numOfOnes] === undefined) obj[numOfOnes] = [binString[i]]
        else obj[numOfOnes].push(binString[i])
    }

    const result = []
    for (let i = 0; i <= maxKey; i++) {
        if (obj[i] === undefined) continue;
        const strings: string[] = obj[i];
        result.push(...strings.map(e => parseInt(e, 2)).sort((a, b) => a - b))
    }


    // console.log(result);
    return result;
};
function is_anagram(s1, s2) {
    // 해당 부분을 작성하세요.
    if (s1 === s2) return true;
    if (s1.length != s2.length) return false;

    const resultObj = {}

    for (let i = 0; i < s1.legnth; i++) {
        const char1 = s1[i];
        const char2 = s2[i];

        if (resultObj[char1]) resultObj[char1]++;
        else resultObj[char1] = 1;


        if (resultObj[char2]) resultObj[char2]--;
        else resultObj[char2] = -1;
    }

    for (const e of result) {
        if (e != 0) {
            return false;
        }
    }
    return true;
}

is_anagram('문전박대', '박대전문') // True 리턴
is_anagram('문전박대', '박대전') // False 리턴
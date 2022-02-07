const target = 5;

function solution(list) {
    // 해당 부분을 작성하세요.
    if (list.length < 2) return [];

    const obj = {}

    for (let i = 0; i < list.length; i++) {
        obj[target - list[i]] = i;
    }

    const result = [];

    for (let i = 0; i < list.length; i++) {
        if (obj[list[i]] != undefined) {

            result.push(
                [i, obj[list[i]]]
            );

            delete obj[i];
        }
    }

    return result;
}


solution([-1, 2, 0, 3, 6, 1]) // [ [0, 4], [1, 3] ] 를 리턴
  // S[0] + S[4] = -1 + 6 = 5
  // S[1] + S[3] = 2 + 3 = 5
function solution(x1, y1, x2, y2, x3, y3) {
    // 이 부분을 작성하세요.

    // (x1,y1) (x2,y2) ==> a1
    // (x2,y2) (x3,y3) ==> a2

    if ((y3 - y2) == 0 && (y2 - y1) == 0) {
        return true;
    }

    if ((x3 - x2) == 0 && (x2 - x1) == 0) {
        return true;
    }

    const a1 = (x2 - x1) / (y2 - y1);
    // const a2 = (x3 - x2) / (y3 - y2);

    const b = 1;
    const f_x = (x) => a1 * x + b

    return a1 === a2;
}

solution(1, 2, 2, 3, 3, 4) // True 리턴
solution(1, 1, 3, 3, 2, 5) // False 리턴
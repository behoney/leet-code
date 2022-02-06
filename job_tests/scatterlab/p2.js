// rude description, cannot understand
// if someone notice the formular, let me know. i'm sure that you will get confused

/**
 *
문제 설명
은퇴 후 치킨집 사장님이 된 종윤이는 고된 연습 끝에 1분에 2마리의 치킨을 튀길 수 있게 되었다. 이 소식을 들은 성구는 치킨집의 번창을 위해 X 마리의 치킨을 주문하였다.

하지만 종윤이는 나이가 들어 혼자 모든 치킨을 튀길 수 없었고, 알바들을 고용할지 고민한다. 알바들은 한 명당 1분에 F 마리의 치킨을 튀길 수 있지만, 수당으로 치킨 C 마리를 미리 줘야 일을 하겠다고 한다. 성격이 급한 성구에게 혼나지 않으려면 가능한 빨리 치킨을 튀겨서 보내줘야 한다.

종윤이가 알바들을 적절히 고용해서 성구가 주문한 X 마리의 치킨을 튀기는데 걸리는 최소 시간을 반환(return)하도록 solution 함수를 작성하시오. (반올림하여 소수점 6번째 자리까지의 값을 반환)

입력

알바 당 인건비(치킨): 1 <= C <= 10000
알바 당 치킨 생산량: 1 <= F <= 100
목표 치킨량: 1 <= X <= 100000
입출력 예

C	F	X	Return
30.0	1.0	2.0	1.0
30.0	2.0	100.0	39.166667
30.5	3.14159	1999.1999	63.968001
500.0	4.0	2000.0	526.190476
 */

function solution(C, F, X) {
    let result = Infinity;
    let numOfEmployee = 0;
    while (1) {
        /**
         *
         * 하지만 종윤이는 나이가 들어 혼자 모든 치킨을 튀길 수 없었고, 알바들을 고용할지 고민한다.
         *  알바들은 한 명당 1분에 F 마리의 치킨을 튀길 수 있지만, 수당으로 치킨 C 마리를 미리 줘야 일을 하겠다고 한다.
         *  성격이 급한 성구에게 혼나지 않으려면 가능한 빨리 치킨을 튀겨서 보내줘야 한다.
         *
         */
        let time = (numOfEmployee * C) / 2;

        /**
         * 종윤이가 알바들을 적절히 고용해서 성구가 주문한 X 마리의
         * 치킨을 튀기는데 걸리는 최소 시간을 반환(return)하도록 solution 함수를 작성하시오.
         */

        time += X / (2 + numOfEmployee * F);

        if (Math.min(result, time) != result) {
            result = Math.min(result, time);
        } else if (result != Infinity) break;

        numOfEmployee++;
    }

    if (result == Infinity) console.error("wrong input, not available");
    // (반올림하여 소수점 6번째 자리까지의 값을 반환)
    return Math.round(result * 1000000) / 1000000;
}
const datePriority = [5, 4, 6, 2, 3, 1, 0];
const targetTemperature = 20;
const targetWeather = 20;

const weatherScores = [-Infinity, 20, 20, 17, 10];
const extraScores = [0, 5, 14];

const checkWorstCondition = (date) => {
    return date[0] == 4 || date[1] == 1 || date[2] <= 0 || date[2] >= 30;
};

function solution(data) {
    const scores = [];

    // scores
    for (let i = 0; i < data.length; i++) {
        const input = data[i];
        let result = 0;
        result += targetTemperature - Math.abs(22 - input[2]);
        if (input[1] == 0) result += weatherScores[input[0]];
        else result += extraScores[input[1]];

        scores.push(result);
    }

    //   console.log(scores);

    const getBestDate = () => {
        // compare
        const maxScore = Math.max(...scores);
        const resultArr = scores.filter((e) => e == maxScore);
        if (resultArr.length == -1) return scores.indexOf(maxScore);
        else {
            for (const prior of datePriority) {
                if (scores[prior] == maxScore) return prior;
            }
        }

        console.error("exceptional case:", scores);
    };

    const getWorstDate = () => {
        const minScore = Math.min(...scores);

        // get date of least score
        let worstDate = scores.indexOf(minScore);

        // console.log("worstDate", worstDate);

        // when duplicated minScores
        if (scores.filter((e) => e == minScore).length > 1) {
            for (const prior of[...datePriority].reverse()) {
                if (scores[prior] == minScore && checkWorstCondition(data[prior])) {
                    worstDate = prior;
                    break;
                }
            }
        }

        // check conditions
        if (checkWorstCondition(data[worstDate])) return worstDate;
        else return -1;
    };

    return [getBestDate(), getWorstDate()];
}
const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const [year, month, day] = input[0].split(" ").map(Number);
// Please Write your code here.
function getSeason(m) {
    if (m >= 3 && m <= 5) {
        return 'Spring';
    }
    if (m >= 6 && m <= 8) {
        return 'Summer';
    }
    if (m >= 9 && m <= 11) {
        return 'Fall';
    }
    return 'Winter';
}

function is윤년(y) {
    if (y % 4 !== 0) {
        return false;
    }
    if (y % 100 !== 0) {
        return true;
    }
    if (y % 400 === 0) {
        return true;
    }
    return false;
}

function lastDayNumber(m, 윤년 = false) {
    if (m === 2) {
        if (윤년 === true) {
            return 29;
        }
        return 28;
    }
    if (m === 4 || m === 6 || m === 9 || m === 11) {
        return 30;
    }
    return 31;
}

function judgeDate(y, m, d) {
    const 윤년 = is윤년(y);

    if (m > 12 || d > lastDayNumber(m, 윤년)) {
        return -1;
    }

    return getSeason(m);
}

console.log(judgeDate(year, month, day));
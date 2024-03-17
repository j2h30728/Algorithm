/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    intervals.push(newInterval);
    intervals.sort((a, b) => a[0] - b[0]);
    let start = intervals[0][0];
    let end = intervals[0][1];
    const arr = [];
    intervals.forEach(([a, b]) => {
        if (end < a) {
            arr.push([start, end]);
            start = a;
            end = b;
        } else {
            end = Math.max(end, b);
        }
    })
    arr.push([start, end]);
    return arr;
};
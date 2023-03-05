function solution(my_string) {
    return my_string.replace(/[aeiou]/g, "");
}
// function solution(my_string) {
//     return [...my_string].filter(str=> !["a","e","i","o","u"].includes(str)).join("");
// }
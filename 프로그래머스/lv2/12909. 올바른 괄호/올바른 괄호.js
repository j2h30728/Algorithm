function solution(s) {
  let number = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? number++ : number--;
    if (number < 0) return false;
  }
  return number === 0 ? true : false;
}

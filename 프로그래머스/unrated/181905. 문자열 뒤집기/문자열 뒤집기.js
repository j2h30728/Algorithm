function solution(my_string, s, e) {
    const start =  my_string.slice(0,s);
    const end = my_string.slice(e+1,my_string.length);
    const middle = my_string.slice(s,e+1).split('').reverse().join('');
    return start+middle+end;
}
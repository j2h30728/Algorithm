function solution(my_string, overwrite_string, s) {
    const start = my_string.slice(0,s);
    const end = my_string.slice(s+overwrite_string.length)
    return start + overwrite_string+end;
}

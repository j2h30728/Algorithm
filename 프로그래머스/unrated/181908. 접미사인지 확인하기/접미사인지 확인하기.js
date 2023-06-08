function solution(my_string, is_suffix) {
    if(my_string.length < is_suffix.length) return 0;
    const newArr =  my_string.split('').reverse();
    const new_suffix= is_suffix.split('').reverse();
    
    for(let i= 0; i < new_suffix.length ; i++){
        if(newArr[i] !== new_suffix[i]) return 0;
    }
    return 1;
}
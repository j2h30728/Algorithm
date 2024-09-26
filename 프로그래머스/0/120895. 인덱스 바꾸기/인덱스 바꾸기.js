function solution(my_string, num1, num2) {
    const arr = my_string.split('');
    const temp1 = arr[num1];
    const temp2 = arr[num2];
    arr[num1] = temp2;
    arr[num2] = temp1;
    return arr.join('');
}
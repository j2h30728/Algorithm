function solution(answers) {
    const one = [1, 2, 3, 4, 5];
    const two =  [ 2, 1, 2, 3, 2, 4, 2, 5 ];
    const three =[ 3, 3, 1, 1, 2, 2, 4, 4, 5, 5]
    const arr = [test(answers,one,1),test(answers,two,2),test(answers,three,3)];
    arr.sort((a,b)=> b.sum - a.sum);
    let max = arr[0].sum;
    const result =[arr[0].name];
    let index = 1;
    while(index < arr.length && max === arr[index].sum){
        result.push(arr[index].name);
        index++;
    }
    return result.sort();
}

function test(answers, arr1, name){
    while(answers.length > arr1.length){
            arr1.push(...arr1)
    }
    let num =0;
    let sum =0;
    for(const i of answers){
        if(i === arr1[num]){
            sum++;
        }
        num++;
    }
    return {name,sum};
}

function solution(n, arr1, arr2) {
    const result = [];

    for(let i=0; i < n; i++){
        const star = (arr1[i] | arr2[i]).toString(2).padStart(n,0).replaceAll(1,"#").replaceAll(0," ")
        result.push(star)
    }
    return result;
}

/*
function solution(n, arr1, arr2) {
    const newArr1 = arr1.map(x=>x.toString(2).padStart(n,0).split(''))
    const newArr2 = arr2.map(x=>x.toString(2).padStart(n,0).split(''));
    const result = Array.from({length :n}).fill([]);
    
    for(let i=0; i < n; i++){
        for(let j=0; j< n; j++){
            if(newArr1[i][j] === '0' && newArr2[i][j] === '0' ){
                result[i][j] = " ";
            }else{
                result[i][j] = "#";
            }
        }
        result[i] = result[i].join('');
    }
    return result;
}
*/
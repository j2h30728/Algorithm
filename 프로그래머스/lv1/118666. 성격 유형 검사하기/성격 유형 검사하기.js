function solution(survey, choices) {
    const score = [3,2,1,0,1,2,3];
    const obj ={};
    choices.forEach((x,i)=>{
        if(x < 4){
            obj[survey[i][0]] = (obj[survey[i][0]] || 0) + score[x-1];
        }else if (x > 4){
            obj[survey[i][1]] = (obj[survey[i][1]] || 0) + score[x-1];
        }
    })
    let result = "";
    const entries = Object.entries(obj);
    result +=getMax('R','T',entries);
    result +=getMax('C','F',entries);
    result +=getMax('J','M',entries);
    result +=getMax('A','N',entries);
    return result;
}

function getMax (a,b,arr){
    const filtered = arr.filter(x=> x[0]=== a || x[0] === b);
    if(filtered.length > 0 ){
        return filtered.length === 1 ? filtered[0][0] : filtered.sort((a,b)=> b[1] -a[1] === 0 ? a[0].charCodeAt(0) - b[0].charCodeAt(0) : b[1]-a[1] )[0][0]
    };
    return a;
}
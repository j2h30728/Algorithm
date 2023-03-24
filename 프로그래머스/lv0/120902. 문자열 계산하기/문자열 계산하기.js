function solution(my_string) {
    const newArr = my_string.split(' ');
    return newArr.reduce((acc,curr,idx)=>{
       if(curr === "+"){
         return acc += parseInt(newArr[idx+1])
       } 
        if(curr === "-"){
          return  acc -= parseInt(newArr[idx+1])
        }
        console.log(acc)
        return acc;
    },parseInt(newArr[0]))
    
}

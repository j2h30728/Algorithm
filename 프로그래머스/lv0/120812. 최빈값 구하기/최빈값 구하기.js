    function func(arr) {
        const result = []
        for(let i =1 ; i< arr.length ; i++){
            if(arr[i-1] === arr[i]) {
                result.push(arr[i])
            }
        }
        if(result.length === 1){
            const answer = result[0]
            return answer
        }
        if (result.length === 0){
            return -1
        } 
        return func(result)   
    }
function solution(array) {
    if(array.length === 1){
        return array[0]
    }
    array.sort((a,b)=> a-b)
    const answer = func(array)
    return answer
}
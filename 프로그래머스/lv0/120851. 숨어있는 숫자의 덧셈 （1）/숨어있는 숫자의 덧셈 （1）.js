function solution(my_string) {
  return  my_string.split('').reduce((acc,curr)=>(!isNaN(+curr)) ? acc + Number(curr) : acc ,0)
 
}
// function solution(my_string) {
//     let answer = 0
//    for(let str of my_string){
//       if(!isNaN(+str) ){
//            answer+= Number(str)
//        }
//    }
//     return answer;
// }
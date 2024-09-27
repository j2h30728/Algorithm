function solution(cards1, cards2, goal) {
    let num1 = 0;
    let num2 = 0;
    for(const str of goal){
        if(cards1[num1] === str){
            num1++;
        }else if(cards2[num2] === str){
            num2++;
        } else{
            return "No";
        }
    }
    return "Yes";
}
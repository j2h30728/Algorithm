function solution(cards1, cards2, goal) {
    for(const string of goal){
        if(cards1[0] === string){
           cards1.shift();
       }else if(cards2[0] === string){
           cards2.shift();
       }else{
           return 'No'
       }
    }
    
    return 'Yes';
}
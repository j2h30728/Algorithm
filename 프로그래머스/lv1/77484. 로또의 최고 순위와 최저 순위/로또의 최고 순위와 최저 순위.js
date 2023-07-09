function solution(lottos, win_nums) {
    let zeroCount =0;
    const filteredArr = lottos.filter(x=> {
        if(x===0){
            zeroCount++;
        }
        return win_nums.includes(x)
    })
    const matchNum =  filteredArr.length;
    return [makeRanking(filteredArr.length+zeroCount), makeRanking(filteredArr.length)]
}


function makeRanking(num) {
    switch(num){
            case(6):
            return 1;
            case(5):
            return 2;
            case(4):
            return 3;
            case(3):
            return 4;
            case(2):
            return 5;
        default:
            return 6;
    }
}
function solution(babbling) {
    const words = ["aya", "ye", "woo", "ma"];
    let result = 0;
    for(let babble of babbling) {
        const tempArr = [];
        let temp = '';
        for(let i of babble){
            temp += i;
            if(words.includes(temp) && tempArr.at(-1) !== temp){
                tempArr.push(temp);
                temp = ''
            }
        }
        if(temp.length === 0 && tempArr.length !== 0){
            result++;
        }
    }
    return result;
}
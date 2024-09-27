function solution(participant, completion) {
    const map = new Map();
    completion.forEach(x => map.set(x, (map.get(x) || 0) + 1));
    for(const name of participant){
        if(!map.get(name)){
            return name;
        }else{
            map.set(name, map.get(name) - 1);
        }
    }
}
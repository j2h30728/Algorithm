function solution(new_id) {
    const newId2 =new_id.toLowerCase().split('').filter(x=> /^[a-z0-9._-]+$/.test(x) );
    
    const newId3 = [];
    for(const ch of newId2){
        if(newId3.at(-1) === "." && ch === ".") continue;
        newId3.push(ch);
    }
    if(newId3.at(0) === "."){
        newId3.splice(0,1);
    }
    if(newId3.at(-1) === "."){
        newId3.splice(newId3.length-1);
    }
    const newId5 = newId3.length === 0 ? ['a'] : newId3;
    
    const newId6 = newId5.slice(0, 15)
    if(newId6.at(-1) === ".") newId6.splice(newId6.length-1);
    
    if(newId6.length <= 2){
        while(newId6.length < 3){
            newId6.push(newId6.at(-1));
        }
    }
    return newId6.join('');
}
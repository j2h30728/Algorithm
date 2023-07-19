function solution(keymap, targets) {
    const obj = {};
    keymap.forEach((str,_)=>{
        [...str].forEach((x,i)=>{
            if(!obj[x]) {
            obj[x] = i+1;
        }else{
            obj[x] = Math.min(obj[x],i+1);
        }
        })
    })
    return targets.map((str)=>{
        let num = 0;
        for(let i = 0; i < str.length ; i++){
            if(!obj[str.at(i)]){
                num = -1;
                break;
            }
            num += obj[str.at(i)];
        }
//         [...str].forEach(x=>{
//             console.log(str,obj[x])
//             if(!obj[x]) {
//                 num = -1;
                
//             }
//             num += obj[x];
//         })
        return num;
    })
}

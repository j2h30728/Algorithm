function solution(new_id) {
     new_id =new_id.toLowerCase().replace(/[^\w-_.]/g, '').replace(/\.{2,}/g,'.').replace(/^\.|\.$/g,'');
    
    new_id = new_id.length === 0 ? 'a' : new_id;
    
    new_id= new_id.length >= 16 ? new_id.slice(0, 15).replace(/\.$/g,'') : new_id;
    
    if(new_id.length <= 2){
        while(new_id.length < 3){
            new_id += new_id.at(-1);
        }
    }
    return new_id;
}
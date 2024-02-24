function solution(phone_book) {
    const map = new Map()
    phone_book.forEach((number)=> map.set(number,true))
    
    for(const phone of phone_book){
        for(let i = 0; i < phone.length; i++){
            const current = phone.slice(0,i);
            if(map.has(current)) return false;
        }
    }
    return true;
}
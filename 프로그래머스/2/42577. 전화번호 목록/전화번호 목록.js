function solution(phone_book) {
    phone_book.sort();
    for(let i = 0; i < phone_book.length; i++){
        if(String(phone_book[i + 1]).startsWith(phone_book[i])){
            return false;
        }
    }
    return true;
}
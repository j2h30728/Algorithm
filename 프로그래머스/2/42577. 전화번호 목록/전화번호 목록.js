function solution(phone_book) {
    const sorted = phone_book.slice().sort();
    for(let i = 1; i < sorted.length; i++){
        if(sorted[i].slice(0, sorted[i - 1].length ) === sorted[i - 1]){
            return false;
        }
    }
    return true;
}
function solution(brown, yellow) {
    let yellowCol = 1;
    while(true){
        let devidedYellow = yellow / yellowCol;
        let calBrown = (devidedYellow + 2) * 2 + yellowCol * 2;
        if(calBrown === brown){
            return [devidedYellow+2, yellowCol+2]
        }
        yellowCol++;
    }
}
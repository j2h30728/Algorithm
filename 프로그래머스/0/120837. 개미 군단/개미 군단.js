function solution(hp) {
    let num = 0;
    const BIG = 5;
    const MIDDLE = 3;
    const SMALL = 1;
    while(hp > 0) {
        if(hp >= BIG){
            num += Math.floor(hp / BIG);
            hp = hp % BIG;
        } else if(hp >= MIDDLE) {
            num += Math.floor(hp / MIDDLE);
            hp = hp % MIDDLE;
        } else {
            num += Math.floor(hp / SMALL);
            hp = hp % SMALL;
        }
    }
    return num;
}
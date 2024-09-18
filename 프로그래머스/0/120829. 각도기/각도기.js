function solution(angle) {
    switch(true){
        case angle < 90:
            return 1;
        case angle === 90:
            return 2;
        case angle < 180 && angle > 90:
            return 3;
        case angle === 180:
            return 4;
    }
}
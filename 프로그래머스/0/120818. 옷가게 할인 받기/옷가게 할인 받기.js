function solution(price) {
    const formatPrice = price.toString().replaceAll(',','');
    if(formatPrice >= 500000){
        return Math.floor(formatPrice * 0.8);
    }else if(formatPrice >= 300000){
        return Math.floor(formatPrice * 0.9);
    }else if(formatPrice >= 100000){
        return Math.floor(formatPrice * 0.95);
    }
    return price;
}
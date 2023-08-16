function solution(ingredient) {
    const making = [];
    let count = 0;
    for(let i = 0; i < ingredient.length; i++){
        making.push(ingredient[i]);
        if(making.slice(-4).join('') === "1231"){
            making.splice(-4);
            count++;
        }
    }
    return count;    
}
/*
function solution(ingredient) {
    const hambuger = '1231'
    let count = 0;
    let ingre = ingredient.join('')
    function helper(arr){
        if(arr.length < 4) return;
         if(ingre.indexOf(hambuger) > -1){
             count++;
             ingre = ingre.slice(0,ingre.indexOf(hambuger)) + ingre.slice(ingre.indexOf(hambuger) + 4);
             helper(ingre);
         }
    }
    helper(ingre);
    return count;
}

*/
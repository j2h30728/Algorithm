/**
 * @param {string} s
 * @return {boolean}
 */
var halvesAreAlike = function(s) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const length = Math.floor(s.length/2);
    const  countVowls = (string) =>{
        let count = 0;
        for(char of string){
            if(vowels.includes(char))count++;
        }
        return count;
    }
    return countVowls(s.slice(0,length)) === countVowls(s.slice(length));    
};
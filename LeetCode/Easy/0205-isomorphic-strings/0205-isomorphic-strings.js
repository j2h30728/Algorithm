/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    const sMap = new Map();
    const tMap = new Map();

    for(let i = 0 ; i < s.length; i ++){
        const sChar = s[i];
        const tChar = t[i];

        if(!sMap.get(sChar)){
            sMap.set(sChar, tChar);
        }
        if(sMap.get(sChar) !== tChar){
            return false;
        }

        if(!tMap.get(tChar)){
            tMap.set(tChar, sChar);
        }
        if(tMap.get(tChar) !== sChar){
            return false;
        }
    }
    return true;
};

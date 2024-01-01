/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
    g.sort((a, b) => a - b);
    s.sort((a, b) => a - b);

    let output = 0;
    let cookieIndex = 0;
    let childrenIndex = 0;

    while(cookieIndex < s.length && childrenIndex < g.length){
        if(s[cookieIndex] >= g[childrenIndex]){
            output++;
            childrenIndex++;
        }
        cookieIndex++;
    }
    return output;
};
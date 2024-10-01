function solution(spell, dic) {
    return dic.some(str => [...str].sort().toString().startsWith(spell.sort().toString())) ? 1 : 2;
}
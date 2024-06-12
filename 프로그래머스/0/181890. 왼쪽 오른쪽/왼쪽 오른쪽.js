function solution(str_list) {
   for(let i = 0; i < str_list.length; i++){
       const char = str_list[i];
       if(char === 'l') return str_list.slice(0, i);
       if(char === 'r') return str_list.slice(i + 1);
   }
    return [];
}
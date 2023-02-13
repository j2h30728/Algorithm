function solution(n, k) {
    const service = Math.floor(n/10)
   if (service > 0 && k - service >= 0){
       return n * 12000 +( k -service) * 2000
   }
    return n*12000 + k * 2000
}
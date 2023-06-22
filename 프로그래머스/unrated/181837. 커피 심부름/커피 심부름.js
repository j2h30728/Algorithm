function solution(order) {
   return order.reduce((acc,curr)=>{
        if(curr.includes('americano')){
           return 4500 + acc;
           }
        if(curr.includes('cafelatte')){
           return 5000 + acc;
           }
        return 4500 + acc;
   },0)
}

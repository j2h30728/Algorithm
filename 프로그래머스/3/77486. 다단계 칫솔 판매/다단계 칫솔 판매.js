function solution(enroll, referral, seller, amount) {
    // 키가 부모노드, 값이 자식노드
    const parent = {};
    enroll.forEach((name, i) => parent[name] = referral[i]);
    
    const total = {};
    enroll.forEach((name) => total[name] = 0);
    
    for(let i = 0; i < seller.length; i++){
        let money = amount[i] * 100;
        let currName = seller[i];
        
        
        while(money > 0 && currName !== '-'){
            total[currName] += money - Math.floor(money / 10);
            currName = parent[currName];
            
            money = Math.floor(money / 10);
        }
    }
    return enroll.map(name => total[name]);
}
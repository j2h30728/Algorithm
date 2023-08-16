function solution(id_list, report, k) {
    const 사용자 = new Map();
    const 신고횟수 = new Map();
    const 정지 = Array.from({length : id_list.length}).fill(0);
    report.forEach(x=>{
        const [신고자, 피신고자] = x.split(' ');
        if(사용자.get(신고자)){
            const 피신고자들 = 사용자.get(신고자);
            if(!피신고자들.includes(피신고자)) 피신고자들.push(피신고자);
        } else{
            사용자.set(신고자,[피신고자])
        }
    });
    Array.from(사용자.values()).flat().forEach(신고된ID => {
        신고횟수.get(신고된ID) ? 신고횟수.set(신고된ID, 신고횟수.get(신고된ID) + 1) : 신고횟수.set(신고된ID, 1) 
    })

    for(const [신고자, 피신고자들] of 사용자.entries()){
        피신고자들.forEach(피신고자 => {
            if(신고횟수.get(피신고자) >= k) 정지[id_list.indexOf(신고자)] += 1;
        })
    }
    return 정지;
}
function solution(id_list, report, k) {
    const users = {};
    const reportUsers = {};

    id_list.forEach(id => {
        users[id] = 0;
        reportUsers[id] = new Set()
    });
    
    report.forEach(x => {
        const [reporting, reported] = x.split(' ');
        reportUsers[reported].add(reporting);
    })
    

    for(let key in reportUsers){
        if(reportUsers[key].size >= k){
            [...reportUsers[key]].forEach(id => users[id] += 1);
        }
    }
    return id_list.map(id => users[id])
}
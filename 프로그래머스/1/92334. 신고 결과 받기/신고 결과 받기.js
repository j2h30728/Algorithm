function solution(id_list, report, k) {
    const map = new Map();
    const ids = new Map();
    
    id_list.forEach(id => ids.set(id, (ids.get(id) || 0)));
    
    report.forEach((p)=>{
        const [report, reported] = p.split(' ');
        
        map.set(reported, (map.get(reported) || new Set()).add(report) );
    })
    
    Array.from(map).filter((report) => report[1].size >= k).forEach((report) => {
        Array.from(report[1]).forEach(name => ids.set(name, (ids.get(name) + 1)))
    })
    
    return id_list.map(id => ids.get(id));
}
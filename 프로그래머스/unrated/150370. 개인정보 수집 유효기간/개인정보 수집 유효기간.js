function solution(today, terms, privacies) {
    const oneMonth = 28;
    const obj = {};
    terms.forEach(x=>{
        const term = x.split(' ');
        obj[term[0]] = term[1] * oneMonth;
    });
    return privacies.map((x,idx)=>{
        const privacy = x.split(' ');
        const [privacyDate, sort ] = privacy;
        let [year, month, date] = privacyDate.split('.').map(x=>x*1);
        const newDate = date + obj[sort] - 1;
        if(newDate >= oneMonth){
            month += Math.floor(newDate / oneMonth);
            date = newDate % oneMonth;
             if(date === 0) {
                date = oneMonth;
                month -=1;
            }
            if(month > 12){
                year +=Math.floor(month / 12);
                month = month % 12;
            }
            if(month === 0){
                month = 12;
                year -=1;
            }

        }
        const  [todayYear, todayMonth, todayDate] = today.split('.').map(x=> 1*x)
        if(todayYear > year) return idx+1;
        if(todayYear === year && todayMonth > month) return idx+1;
        if(todayYear === year && todayMonth === month && todayDate > date) return idx+1;
    }).filter(x=> typeof x === 'number');
}
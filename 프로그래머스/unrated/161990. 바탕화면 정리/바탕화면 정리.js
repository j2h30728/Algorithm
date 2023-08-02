function solution(wallpaper) {
    const start = new Array(2).fill(100);
    const end = new Array(2).fill(0);
    wallpaper.forEach((x,idx)=>{
        if(x.includes('#')){
            start[0] = Math.min(start.at(0), idx);
            start[1] = Math.min(start.at(1), x.indexOf('#'));
            end[0] = Math.max(end.at(0), idx) ;
            end[1] = Math.max(end.at(1), x.lastIndexOf('#'));
        }
    })
    end[0] += 1;
    end[1] += 1;
    return [...start,...end];
}
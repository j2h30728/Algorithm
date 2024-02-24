function solution(genres, plays) {
    const songs = genres.reduce((obj,genre,index)=>{
        if(!obj[genre]){
            obj[genre] = {playCount :plays[index], list : []};
        } else{
            obj[genre].playCount += plays[index]; 
        }
        obj[genre].list.push([index, plays[index]]);
        
        return obj;
    },{});
    
    const sorted = Object.values(songs).sort((a,b)=> b.playCount - a.playCount);
    return sorted.reduce((arr,cur)=>{
        cur.list.sort((a,b)=> b[1]-a[1]);
        arr.push(cur.list[0][0]);
        if(cur.list.length > 1){
            arr.push(cur.list[1][0]);
        }
        return arr;
    },[])
}
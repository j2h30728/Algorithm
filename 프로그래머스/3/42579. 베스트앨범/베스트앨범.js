function solution(genres, plays) {
    const result = [];
    const genresObj = {};
    const playObj = {};
    
    genres.forEach((genre, i) => {
        if(!(genre in genresObj)){
            genresObj[genre] = [];
            playObj[genre] = 0;
        }
        genresObj[genre].push([i, plays[i]])
        playObj[genre] += plays[i]
        
    });
    const sortedGenre = Object.keys(playObj).sort((a,b) => playObj[b] - playObj[a] );
    for(const genre of sortedGenre){
        const sortedSongs = genresObj[genre].sort((a, b) => b[1] - a[1]).slice(0,2).map(x => x[0])
        result.push(...sortedSongs);
    }
    
    return result;
}
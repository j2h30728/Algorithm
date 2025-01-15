function solution(video_len, pos, op_start, op_end, commands) {
    const video_len_time = calculateTime(video_len);
    const op_start_time = calculateTime(op_start);
    const op_end_time = calculateTime(op_end);
    let cur_pos = calculateTime(pos);
    commands.forEach(command => {
        let temp = cur_pos;
        if(op_start_time <= temp && temp <= op_end_time ) {
            temp = op_end_time;
        }
        if(command === 'next') {
            temp = (temp + 10 <= video_len_time) ? temp += 10 : video_len_time;
        }else if (command === 'prev'){
            temp = (temp - 10 <= 0) ? 0 : temp -= 10;
        }
        if(op_start_time <= temp && temp <= op_end_time ) {
            temp = op_end_time;
        }
        cur_pos = temp;
    })
    return [Math.floor(cur_pos / 60), cur_pos % 60 ].map(x => x.toString().padStart(2, '0')).join(':');
}

function calculateTime (time) {
    const [min, sec] = time.split(':').map(Number);
    return min * 60 + sec;
}
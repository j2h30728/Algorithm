const MESSAGES = {
    'Enter' : '님이 들어왔습니다.',
    'Leave' : '님이 나갔습니다.',
}

function solution(record) {
    const users = {};
    let chats = [];
    
    record.forEach(x => {
        const [active, id, username] = x.split(' ');
        if(active !== "Leave"){
            users[id] = username;
        }
    })
    
    record.forEach(x => {
        const [active, id, username] = x.split(' ');
        if(active !== "Change"){
            chats.push(users[id] + MESSAGES[active])
        }
    })
    
    return chats;
}
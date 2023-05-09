function solution(phone_number) {
    // return phone_number.split('').map((x,idx)=> (idx < phone_number.length-4) ? '*' : x).join('')
    return '*'.repeat(phone_number.length-4) + phone_number.slice(-4)
    
}
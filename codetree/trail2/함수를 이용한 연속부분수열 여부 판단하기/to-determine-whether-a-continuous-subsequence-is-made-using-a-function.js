const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

let [n1, n2] = input[0].split(" ").map(Number);
let a = input[1].split(" ").map(Number);
let b = input[2].split(" ").map(Number);

// Please Write your code here.
let index = a.indexOf(b[0]);
let arr = a.slice(index);

while(true){
    if(arr.indexOf(b[0]) === -1){
        console.log('No');
        return;
    }
    for(let i = 0; i < n2; i++){
        if(arr[i] !== b[i]){
            arr = arr.slice(i);
            break;
        }
        if(i === n2 - 1){
            console.log('Yes');
            return;
        }
    }
}

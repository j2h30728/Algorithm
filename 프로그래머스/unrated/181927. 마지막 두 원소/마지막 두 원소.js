function solution(num_list) {
    const length = num_list.length;
    if(num_list[length-1] > num_list[length-2]){
        return [...num_list , num_list[length-1] -num_list[length-2]];
    }else{
        return [...num_list, num_list[length-1]*2];
    }
}
//마지막 원소가 그전 원소보다 크면
//마지막 원소에서 그전 원소를 뺀 값

//마지막 원소가 그전 원소보다 크지 않다면 마
//지막 원소를 두 배한 값을 추가하여 return
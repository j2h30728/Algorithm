# Intuition

마라톤 참가자 배열(participant)과 완주자 배열(completion)을 정렬한 후, 두 배열을 순차적으로 비교하여 완주하지 못한 선수를 찾는 찾는것.
두 배열을 정렬하면, 동명이인을 포함하여 각 선수의 이름이 같은 순서로 정렬된다.이후 두 배열을 비교할 때, 처음으로 이름이 일치하지 않는 위치의 participant 배열의 선수가 완주하지 못한 선수일 것.

## Approach

1. **배열 정렬**: `participant` 배열과 `completion` 배열을 알파벳 순으로 정렬.
2. **배열 비교**: 정렬된 두 배열을 순차적으로 비교합니다. `participant` 배열을 순회하면서, 현재 인덱스의 `participant`와 `completion`의 선수 이름이 일치하지 않는 경우, 해당 `participant`의 선수가 완주하지 못한 선수.
3. **완주하지 못한 선수 반환**: 비교 중 이름이 일치하지 않는 첫 번째 `participant` 선수를 반환. 모든 `completion` 선수와 일치했지만, `participant` 배열에 선수가 남아 있는 경우(동명이인 포함), 마지막 남은 `participant` 선수가 완주하지 못한 선수.

## Complexity

- **Time complexity**: $$O(N \log N)$$ - `participant`와 `completion` 배열을 정렬하는 데 가장 많은 시간이 소요되며, 이는 $$O(N \log N)$$입니다. 여기서 $$N$$은 `participant` 배열의 길이임.
- **Space complexity**: $$O(1)$$ - 추가적인 공간을 사용하지 않고 주어진 배열을 정렬하고 비교하기 때문에, 공간 복잡도는 $$O(1)$$

## Code

```javascript
function solution(participant, completion) {
  participant.sort();
  completion.sort();
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
```

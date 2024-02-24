## Intuition

각 작업이 완료되기까지 필요한 일수를 계산한 후, 순차적으로 작업들이 완료되는 시점을 기준으로 배포할 수 있는 작업의 수를 구한다.
앞선 작업이 완료되어야만 뒤따르는 작업들도 함께 배포될 수 있다.

## Approach

1. **작업 완료 일수 계산**: `progresses`와 `speeds` 배열을 사용하여 각 작업이 완료되기까지 필요한 일수를 계산한다. 이때, `(100 - progress) / speed`를 계산하고, `Math.ceil`을 사용하여 올림 처리하여 정확한 일수를 구한다.
2. **배포 일수 집계**: 첫 번째 작업을 기준으로 하여, 이후 작업들이 해당 작업보다 먼저 또는 동시에 완료될 수 있는 경우, 해당 작업들을 함께 배포할 수 있는 그룹으로 집계한다. 이때, 더 긴 완료 시간을 가진 작업이 나타나면, 현재까지의 배포 가능한 작업 수를 결과 배열에 추가하고, 새로운 배포 그룹을 시작한다.
3. **결과 반환**: 모든 작업을 확인한 후, 마지막 배포 그룹의 작업 수를 결과 배열에 추가한다.

## Complexity

- **Time complexity**: $$O(n)$$ - `n`은 `progresses` 배열의 길이. 각 작업을 한 번씩만 확인하므로, 시간 복잡도는 $$O(n)$$.
- **Space complexity**: $$O(n)$$ - 계산된 작업 완료 일수와 최종 결과를 저장하는 데 필요한 공간은 입력 배열의 크기에 비례한다.

## Code

```javascript
function solution(progresses, speeds) {
  const days = progresses.map((progress, i) => Math.ceil((100 - progress) / speeds[i]));
  const result = [];
  let maxDay = days[0];
  let count = 1;
  for (let i = 1; i < days.length; i++) {
    if (days[i] <= maxDay) {
      count++;
    } else {
      result.push(count);
      maxDay = days[i];
      count = 1;
    }
  }
  result.push(count);
  return result;
}
```

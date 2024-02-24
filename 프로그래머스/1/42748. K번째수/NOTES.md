## Intuition

주어진 배열에서 특정 부분을 잘라내고, 그 부분을 정렬한 다음, 정렬된 배열에서 특정 위치의 숫자를 찾는 것.

## Approach

1. **배열 순회**: 주어진 `commands` 배열을 순회하고 각 원소는 `[i, j, k]` 형식으로, `i`는 시작 인덱스, `j`는 끝 인덱스, `k`는 찾고자 하는 순서를 나타낸다.
2. **부분 배열 추출 및 정렬**: `array.slice(i - 1, j)`를 사용하여 주어진 범위의 부분 배열을 추출합니다. 추출된 배열을 오름차순으로 정렬합니다. JavaScript의 `sort` 함수는 기본적으로 문자열 비교를 수행하기 때문에, 숫자 정렬을 위해 비교 함수 `(a, b) => a - b`를 전달합니다.
3. **결과 추출**: 정렬된 배열에서 `k-1` 위치의 요소를 찾아 결과 배열에 추가합니다.
4. **결과 반환**: 모든 명령어를 처리한 후, 결과 배열을 반환합니다.

## Complexity

- **Time complexity**: $$O(n \log n)$$ - 여기서 $$n$$은 `array.slice`로 추출된 부분 배열의 최대 길이입니다. 각 명령어마다 `sort` 함수를 호출하여 부분 배열을 정렬하는 데 가장 많은 시간이 소요되며, 평균적으로 $$O(n \log n)$$ 시간 복잡도를 가집니다. `commands`의 길이를 $$m$$이라고 할 때, 전체 시간 복잡도는 각 명령어에 대한 정렬을 고려하여 $$O(m \cdot n \log n)$$입니다.
- **Space complexity**: $$O(n)$$ - 여기서 $$n$$은 `array.slice`로 생성된 부분 배열을 저장하는 데 필요한 공간입니다. 이는 각 명령어를 처리할 때마다 발생하는 최대 추가 공간입니다.

## Code

```javascript
function solution(array, commands) {
  const result = [];
  for (let index = 0; index < commands.length; index++) {
    const [i, j, k] = commands[index];
    const slicedArray = array.slice(i - 1, j).sort((a, b) => a - b);

    result.push(slicedArray[k - 1]);
  }
  return result;
}
```

위 코드는 주어진 `commands` 배열에 따라 각 명령어를 처리하고, 각 처리 결과를 `result` 배열에 담아 반환합니다. 이 방식은 주어진 문제의 요구 사항을 충족하며, 주어진 배열과 명령어 배열을 효율적으로 처리합니다.

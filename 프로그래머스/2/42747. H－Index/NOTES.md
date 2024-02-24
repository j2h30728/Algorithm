## Intuition

주어진 인용 횟수 배열을 효과적으로 처리하여, `h`번 이상 인용된 논문이 `h`편 이상인 최대 `h` 값을 찾는다.

## Approach

1. **정렬**: 인용 횟수 배열을 내림차순으로 정렬한다. 배열의 앞부분에는 가장 많이 인용된 논문이 위치하게 되며, 이를 통해 H-Index를 보다 쉽게 찾을 수 있다.
2. **탐색**: 정렬된 배열을 순회하면서 각 인덱스 `i`에 대해, `citations[i]`가 `i + 1`보다 크거나 같은지 확인한다. 이 조건을 만족하는 마지막 `i` 값이 H-Index가 된다.
3. **종료 조건**: 배열을 순회하는 도중 `citations[i] < i + 1` 조건을 만나면, 그 시점에서의 `i` 값이 H-Index의 최댓값임을 의미하며, 탐색을 종료한다.

## Complexity

- **Time complexity**: $$O(n \log n)$$ - 주어진 인용 횟수 배열을 정렬하는 데 가장 많은 시간이 소요되며, 이후의 배열 순회는 $$O(n)$$. 따라서 전체 시간 복잡도는 정렬 때문에 $$O(n \log n)$$입니다.
- **Space complexity**: $$O(1)$$ - 추가적인 공간을 사용하지 않고 주어진 배열 내에서 정렬과 탐색을 진행하기 때문에, 공간 복잡도는 상수.

## Code

```javascript
function solution(citations) {
  // 인용 횟수를 내림차순으로 정렬
  citations.sort((a, b) => b - a);

  let hIndex = 0; // H-Index 초기화
  for (let i = 0; i < citations.length; i++) {
    // 인용 횟수가 현재 인덱스(논문 수)보다 크거나 같은 경우, H-Index 후보 업데이트
    if (citations[i] >= i + 1) {
      hIndex = i + 1;
    } else {
      // 인용 횟수가 논문 수보다 작아지는 순간, 탐색 종료
      break;
    }
  }
  return hIndex; // 계산된 H-Index 반환
}
```

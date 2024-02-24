## Approach

1. **결과 배열 초기화**: 주식 가격의 길이와 동일한 길이를 가진 배열 `answer`를 생성하고, 모든 요소를 0으로 초기화합니다. 이 배열은 각 시점에서의 가격이 떨어지지 않은 시간을 저장하는 데 사용된다.

2. **가격 비교**: 이중 for 루프를 사용하여 각 시점의 가격을 그 이후의 시점들의 가격과 비교한다. 외부 루프는 현재 시점의 가격을 나타내고, 내부 루프는 현재 시점 이후의 가격을 나타낸다.

3. **시간 계산**: 현재 시점의 가격이 이후 시점의 가격보다 작거나 같으면, 가격이 떨어지지 않은 시간을 나타내는 `answer[i]` 값을 1 증가시킨다. 현재 시점의 가격이 이후 시점의 가격보다 클 경우, 가격이 떨어진 것이므로 내부 루프를 중단한다.

4. **결과 반환**: 모든 비교가 끝나면 `answer` 배열에 저장된 각 시점에서의 가격이 떨어지지 않은 시간을 반환한다.

## Complexity

- **Time complexity**: $$O(n^2)$$ - `prices` 배열의 각 요소에 대해 나머지 요소와 비교하기 때문에, 시간 복잡도는 $$O(n^2)$$. 여기서 $$n$$은 `prices` 배열의 길이이다.
- **Space complexity**: $$O(n)$$ - 길이 $$n$$의 `answer` 배열을 추가로 사용하기 때문에, 공간 복잡도는 $$O(n)$$.

## Code

```javascript
function solution(prices) {
  var answer = new Array(prices.length).fill(0);
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      answer[i]++;
      if (prices[i] > prices[j]) break;
    }
  }
  return answer;
}
```

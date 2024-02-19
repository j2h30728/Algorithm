# Intuition

2의 거듭제곱인지 판별하는 문제.
2의 거듭제곱은 이진수 표현에서 1이 단 하나만 존재하고 나머지는 모두 0이라는 특징을 가진다.
이를 이용해서 비트 연산을 활용할 수 있다.

# Approach

1. **양수만 로직 진행** : 2의 거듭제곱은 항상 양수이다.
2. **비트 연산** : `n & (n - 1)` 의 결과가 0이라면 `n`은 2의 거듭제곱. `n`과 `n-1`의 모든 비트가 정반대이기 때문

# Complexity

- Time complexity: O(1)
- Space complexity: O(1)

# Code

```js
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  return n > 0 && (n & (n - 1)) === 0;
};
```

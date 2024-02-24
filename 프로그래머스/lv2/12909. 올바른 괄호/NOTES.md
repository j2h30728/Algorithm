## Approach

1. **변수 초기화**: 변수 `number`를 0으로 초기화. 이 변수는 열린 괄호와 닫힌 괄호의 차이를 추적.
2. **문자열 순회**: 문자열 `s`를 순회하며 각 문자를 확인한다.
   - 열린 괄호 '('가 나오면 `number`를 1 증가
   - 닫힌 괄호 ')'가 나오면 `number`를 1 감소
3. **올바른 괄호 검증**: 순회 중 `number`가 음수가 되면, 닫힌 괄호가 열린 괄호보다 먼저 나온 경우이므로 `false`를 반환.
4. **최종 검증**: 모든 문자열을 순회한 후, `number`가 0이라면 모든 괄호가 적절히 닫혔다는 의미이므로 `true`를 반환. 만약 `number`가 0이 아니라면, 일부 괄호가 닫히지 않았다는 의미이므로 `false`를 반환.

## Complexity

- **Time complexity**: $$O(n)$$ - `n`은 문자열 `s`의 길이. 문자열을 한 번 순회하므로 시간 복잡도는 $$O(n)$$.
- **Space complexity**: $$O(1)$$ - 고정된 수의 변수만 사용하므로 공간 복잡도는 $$O(1)$$.

## Code

```javascript
function solution(s) {
  let number = 0;
  for (let i = 0; i < s.length; i++) {
    s[i] === "(" ? number++ : number--;
    if (number < 0) return false;
  }
  return number === 0 ? true : false;
}
```

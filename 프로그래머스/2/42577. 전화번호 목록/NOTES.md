# Intuition

이 문제는 주어진 전화번호 목록(`phone_book`)에서 어떤 번호가 다른 번호의 접두어인 경우를 찾는 것.
해결 방법은 전화번호 목록을 순회하며 각 번호를 부분적으로 잘라 Map에 저장된 다른 번호의 접두사인지 확인하는 것.

## Approach

1. **Map 초기화**: 전화번호 목록의 각 번호를 키로 하고, 값을 `true`로 하는 Map 객체(`map`)를 생성.
2. **전화번호 접두사 검사**: 전화번호 목록을 순회하며 각 전화번호의 부분 문자열(접두사)이 Map에 존재하는지 확인. 전화번호의 각 접두사를 생성하기 위해 내부 루프를 사용하여 문자열을 잘라내고, 이 접두사가 Map에 존재하는지 확인한다.
3. **접두사 발견 시 반환**: 어떤 전화번호의 접두사가 Map에 존재한다면, 즉시 `false`를 반환한다. 이는 한 번호가 다른 번호의 접두어인 경우를 의미함.
4. **전화번호 목록 순회 완료**: 모든 전화번호를 순회하고 접두사가 발견되지 않으면, `true`를 반환. 이는 전화번호 목록에 어떤 번호도 다른 번호의 접두어가 아니라는 것을 의미한다.

## Complexity

- **Time complexity**: $$O(NM)$$ - 여기서 $$N$$은 `phone_book`의 길이, $$M$$은 전화번호의 최대 길이. 각 전화번호마다 접두사를 생성하고 Map에서 검사하는 과정이 필요하므로, 시간 복잡도는 $$O(NM)$$.
- **Space complexity**: $$O(N)$$ - 전화번호를 저장하는데 사용되는 Map의 공간 복잡도. 전화번호 목록의 각 번호를 Map에 저장하므로, 공간 복잡도는 $$O(N)$$.

## Code

```javascript
function solution(phone_book) {
  const map = new Map();
  phone_book.forEach((number) => map.set(number, true));

  for (const phone of phone_book) {
    for (let i = 1; i < phone.length; i++) {
      // i를 1부터 시작하여 현재 전화번호 자체는 제외
      const current = phone.slice(0, i);
      if (map.has(current)) return false;
    }
  }
  return true;
}
```

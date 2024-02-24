## Intuition

각 프로세스의 우선순위와 원래 인덱스를 객체로 묶어 배열에 저장.
이후, 배열에서 프로세스를 하나씩 꺼내 현재 배열에 있는 다른 프로세스들의 우선순위와 비교하여 실행 순서를 결정한다.

## Approach

1. **프로세스 객체 생성**: 각 프로세스와 해당 우선순위를 객체로 만들어 배열에 저장한다. 이때, 원래의 인덱스도 함께 저장하여, 특정 프로세스를 추후에 식별할 수 있도록 한다.
2. **우선순위 검사**: 배열에서 프로세스를 순차적으로 꺼내어, 현재 배열 내 다른 프로세스의 우선순위와 비교한다. 만약 현재 꺼낸 프로세스보다 우선순위가 높은 프로세스가 있다면, 꺼낸 프로세스를 배열의 끝으로 다시 삽입한다.
3. **실행 순서 결정**: 현재 꺼낸 프로세스보다 우선순위가 높은 프로세스가 없다면, 해당 프로세스를 실행한다. 이때, 실행한 프로세스가 찾고자 하는 프로세스인지 확인하여, 맞다면 현재까지 실행한 프로세스의 수를 반환.

## Complexity

- **Time complexity**: $$O(n^2)$$ - 최악의 경우, 각 프로세스를 배열에서 꺼낼 때마다 나머지 프로세스와 비교해야 하므로, 시간 복잡도는 $$O(n^2)$$.
- **Space complexity**: $$O(n)$$ - 프로세스의 우선순위와 인덱스를 저장하기 위해 추가적인 공간이 필요하므로, 공간 복잡도는 $$O(n)$$.

## Code

```javascript
function solution(priorities, location) {
  const arr = priorities.map((priority, index) => ({ priority, index }));
  let count = 0;

  while (arr.length > 0) {
    const current = arr.shift();
    if (arr.some((item) => item.priority > current.priority)) {
      arr.push(current);
    } else {
      count++;
      if (current.index === location) {
        return count;
      }
    }
  }
  return count;
}
```

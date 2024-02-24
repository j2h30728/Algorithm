## Intuition

각 트럭이 다리를 건너는 데 필요한 시간을 계산하기 위해, 다리를 일종의 큐(queue)로 모델링한다.
다리의 길이만큼의 배열을 사용하여, 각 배열의 요소를 다리 위의 트럭으로 생각하며, 배열의 크기는 다리의 최대 용량을 나타낸다.
트럭이 다리에 진입할 때마다 배열에 트럭의 무게를 추가하고, 다리를 떠날 때는 배열에서 트럭을 제거함으로써 다리의 현재 무게를 관리한다.

## Approach

1. **초기 설정**: `time` 변수를 0으로 초기화하고, `bridge`라는 배열을 `bridge_length`만큼의 길이로 생성한 후 0으로 채운다. `bridge_weight` 변수를 사용하여 다리 위의 현재 총 무게를 추적한다.
2. **트럭 처리**: `truck_weights` 배열에 트럭이 남아있거나 `bridge_weight`가 0보다 클 동안 반복합니다. 각 반복마다 시간을 1초 증가시키고, 다리에서 가장 앞에 있는 트럭(배열의 첫 번째 요소)을 제거하여 `bridge_weight`에서 무게를 뺀다.
3. **다리에 트럭 진입 시도**: 대기 중인 트럭이 있고, 다리 위의 현재 무게와 다음 트럭의 무게 합이 다리가 견딜 수 있는 최대 무게 이하인 경우, 트럭을 다리에 추가한다. 그렇지 않으면 다리의 길이를 유지하기 위해 0을 배열에 추가한다.
4. **시간 반환**: 모든 트럭이 다리를 건너고 `truck_weights` 배열이 비어있으며 `bridge_weight`가 0이 되면, 모든 트럭이 다리를 건넌 것이므로 총 소요된 시간을 반환한다.

## Complexity

- **Time complexity**: $$O(n)$$ - 여기서 $$n$$은 `truck_weights` 배열의 길이. 각 트럭을 한 번씩 처리하므로, 시간 복잡도는 $$O(n)$$.
- **Space complexity**: $$O(bridge\_length)$$ - 다리를 모델링하는 데 사용되는 배열의 크기가 공간 복잡도를 결정한다. 따라서 공간 복잡도는 다리의 길이에 비례한다.

```javascript
function solution(bridge_length, weight, truck_weights) {
  let time = 0;
  let bridge = new Array(bridge_length).fill(0);
  let bridge_weight = 0;

  while (truck_weights.length > 0 || bridge_weight > 0) {
    time++;
    bridge_weight -= bridge.shift();

    if (truck_weights.length > 0) {
      if (bridge_weight + truck_weights[0] <= weight) {
        let truck = truck_weights.shift();
        bridge.push(truck);
        bridge_weight += truck;
      } else {
        bridge.push(0);
      }
    }
  }

  return time;
}
```

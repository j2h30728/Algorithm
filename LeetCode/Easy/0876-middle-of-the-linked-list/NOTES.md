# Intuition

링크드 리스트의 중간 노드 또는 중간 노드가 두 개일 경우 두번 째를 반환한다고 할 때, 각각의 노드를 저장한뒤 해당되는 노드를 반환한다.

# Approach

ListNode를 반복문을 사용해서 nodeArr 배열에 노드마다 저장을 한다.
전체 배열을 저장한 뒤, 배열의 길이를 2로 나누고 내림을 하게되면 중간 노드가 저장된 인덱스(index)를 가르키게 된다.
해당 인덱스를 통해 찾으려고하는 node를 `nodeArr[index]` 를 통해서 뽑아 값을 반환한다.

# Complexity

- Time complexity:
  O(n) : 연결 리스트의 모든 노드를 한 번씩 순회한다.

- Space complexity:
  O(n) : 연결 리스트의 모든 노드를 배열에 저장한다.

# Code

```js
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function (head) {
  const nodeArr = [];
  let node = head;
  while (node) {
    nodeArr.push(node);
    node = node.next;
  }
  const index = Math.floor(nodeArr.length / 2);
  return nodeArr[index];
};
```

주어진 연결 리스트의 중간 노드를 찾아 반환한다.
연결 리스트의 길이가 짝수일 경우 두 번째 중간 노드를 반환한다.

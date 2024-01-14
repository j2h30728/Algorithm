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
var swapPairs = function (head) {
    // 순서를 바꿀 노드가 없으면 바로 리턴
    if (!head || !head.next) return head;

    // 임시 노드 생성: 교환된 노드들의 새로운 리스트의 시작점을 가리킴
    let temp = new ListNode()

    let prev = temp; // 교환될 쌍의 마지막노드를 가리키는 포인터 
    let cur = head; // 현재 처리할 노드 쌍의 첫 번째 노드 가리키는 포인터
    while (cur && cur.next) {
        // 첫 번째 노드와 두 번째 노드 교환
        prev.next = cur.next;
        cur.next = prev.next.next;
        prev.next.next = cur;

        // 다음 쌍으로 포인터 이동
        prev = cur;
        cur = cur.next;
    }
    return temp.next;
};
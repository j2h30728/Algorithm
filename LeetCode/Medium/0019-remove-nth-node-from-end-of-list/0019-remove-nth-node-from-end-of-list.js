/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    let fast = head;
    let slow = head;

    // fast vhdlsxjfmf n 노드 만큼 앞으로 이동
    for (let i = 0; i < n; i++) {
        fast = fast.next;
    }

    // 제거할 노드가 첫번째 노드일 경우
    if (!fast) return head.next;

    while (fast.next) {
        slow = slow.next;
        fast = fast.next;
    }

    //제거 할 노드
    slow.next = slow.next.next;
    return head;
};
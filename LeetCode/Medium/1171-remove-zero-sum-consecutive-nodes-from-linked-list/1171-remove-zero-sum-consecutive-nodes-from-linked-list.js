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
function ListNode(val = 0, next = null) {
    this.val = val;
    this.next = next;
}
var removeZeroSumSublists = function (head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    const map = new Map()
    let node = dummy;
    let sum = 0;

    while (node !== null) {
        sum += node.val;
        map.set(sum, node);
        node = node.next;
    }

    node = dummy;
    sum = 0;
    while (node !== null) {
        sum += node.val;
        if (map.get(sum) !== node) {
            node.next = map.get(sum).next;
        }
        node = node.next;
    }
    return dummy.next;
}
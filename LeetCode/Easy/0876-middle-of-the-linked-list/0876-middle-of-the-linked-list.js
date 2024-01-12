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
    let node = head
    while (node) {
        nodeArr.push(node);
        node = node.next;
    }
    const index = Math.floor(nodeArr.length / 2);
    return nodeArr[index];
};
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const stack = [];
    let node = head;
    while (node !== null) {
        stack.push(node.val);
        node = node.next;
    }
    for (let i = 0; i < stack.length / 2; i++) {
        if (stack[i] !== stack[stack.length - 1 - i]) {
            return false;
        }
    }
    return true;
};
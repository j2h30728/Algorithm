/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxAncestorDiff = function (root) {
    if (root === null) return 0;
    let answer = 0;
    let min = root.val;
    let max = root.val;

    function helper(root, min, max) {
        if (root === null) return;
        answer = Math.max(answer, Math.abs(min - root.val), Math.abs(max - root.val));
        min = Math.min(min, root.val);
        max = Math.max(max, root.val);

        helper(root.left, min, max);
        helper(root.right, min, max);
    }
    helper(root, min, max);
    return answer;
};



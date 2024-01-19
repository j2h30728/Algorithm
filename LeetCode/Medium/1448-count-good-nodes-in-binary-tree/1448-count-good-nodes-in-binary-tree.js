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
var goodNodes = function (root) {
    let count = 0;
    let max = root.val;

    function helper(root, max) {
        if (root === null) return 0;
        if (root.val >= max) count++;

        max = Math.max(max, root.val);
        helper(root.left, max);
        helper(root.right, max);
    }
    helper(root, max);
    return count;
};
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
var minDepth = function (root) {
    if (root === null) return 0;
    return helper(root);
};

function helper(root) {
    if (root === null) return Infinity;
    if (root.left === null && root.right === null) return 1;

    return 1 + Math.min(helper(root.left), helper(root.right));
} 
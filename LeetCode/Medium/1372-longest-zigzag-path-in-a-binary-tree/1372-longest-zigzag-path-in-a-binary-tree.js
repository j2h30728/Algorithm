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
var longestZigZag = function (root) {
    let pathLength = 0;


    function dfs(node, isLeftTime, steps) {
        if (node === null) return;
        pathLength = Math.max(pathLength, steps)

        dfs(node.left, false, isLeftTime ? steps + 1 : 1)
        dfs(node.right, true, isLeftTime ? 1 : steps + 1)
    }

    if (root) {
        dfs(root.left, false, 1);
        dfs(root.right, true, 1);
    }
    return pathLength
};
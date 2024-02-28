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
var findBottomLeftValue = function (root) {
    const leaf = [];
    let index = 0;

    function dfs(node) {
        if (!node) { return; } else {
            index++;
            leaf.push({ node: node.val, index: index })
        };
        if (node.left) {
            dfs(node.left);
            index--;
        }
        if (node.right) {
            dfs(node.right);
            index--;
        }
    }

    dfs(root);
    return leaf.sort((a, b) => b.index - a.index)[0].node;
};
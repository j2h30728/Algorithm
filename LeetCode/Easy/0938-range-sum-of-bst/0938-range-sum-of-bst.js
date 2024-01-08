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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */

var rangeSumBST = function (root, low, high) {
    if (!root) {
        return 0;
    }
    const currValue = (root.val >= low && root.val <= high) ? root.val : 0;

    const leftNodeSum = rangeSumBST(root.left, low, high);
    const rightNodeSum = rangeSumBST(root.right, low, high);
    
    return currValue + leftNodeSum + rightNodeSum;
};
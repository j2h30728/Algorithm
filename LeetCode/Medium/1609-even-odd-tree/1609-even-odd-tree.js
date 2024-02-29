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
 * @return {boolean}
 */
var isEvenOddTree = function(root) {
    const queue =[[root, 0]];
    let prevVal = null;

    while(queue.length > 0){
        let size = queue.length;
        let expected = queue[0][1] % 2 === 0 ? 1 : 0;

        for(let i = 0; i < size; i++){
            const [currentNode ,currentLevel] = queue.shift();
            
            if(currentNode.val % 2 !== expected || prevVal !== null && ( expected ? prevVal >= currentNode.val : prevVal <= currentNode.val )){
                return false;
            }
            prevVal = currentNode.val;
            if(currentNode.left){
                queue.push([currentNode.left, currentLevel + 1]);
            }
            if(currentNode.right){
                queue.push([currentNode.right, currentLevel + 1]);
            }
        }
        prevVal = null;
    }
    return true;
};
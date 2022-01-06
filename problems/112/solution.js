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
 * @param {number} targetSum
 * @return {boolean}
 */

TreeNode.prototype.isLeaf = function () {
  return !this.left && !this.right;
  // return isLeaf(this);
};

const isLeaf = (node) => {
  console.log("leaf", node.val, node.left, node.right);
  return !node.left && !node.right;
};

var hasPathSum = function (root, targetSum) {
  if (!root) return false;
  if (isLeaf(root)) {
  // if (root.isLeaf()) {
    console.log("root is leaf");
    return root.val == targetSum;
  }

  const getPathSum = (node, sum = 0) => {
    if (!node) return false;
    console.log("getPathSum", node, sum);
    if (isLeaf(root)) return targetSum == node.val + sum ? true : false;
    // if (node.isLeaf()) return targetSum == node.val + sum ? true : false;
    return (
      getPathSum(node.left, sum + node.val) ||
      getPathSum(node.right, sum + node.val)
    );
  };

  return getPathSum(root);
};

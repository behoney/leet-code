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
var isSymmetric = function (root) {
  if (root.left == null && root.right == null) return true;
  return bfsCompare(root.left, root.right);
};

const bfsCompare = (left, right) => {
  if (left == null && right == null) return true;

  if (compareNode(left, right)) {
    return (
      bfsCompare(left.right, right.left) && bfsCompare(left.left, right.right)
    );
  }
  return false;
};

const compareNode = (left, right) => {
  if (left != null && right != null && left.val == right.val) {
    console.log('true', left, right);
    return true;
  } else {
    console.log('false', left, right);
    if (left == null && right == null) return true;
    return false;
  }
};

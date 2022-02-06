/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isValidBST(root: TreeNode | null): boolean {
  if (!root && !root.left && !root.right) return true;

  let isValid = true;

  const dfs = (node: TreeNode, trace: number[], direction: boolean[]) => {
    if (!node || !isValid) return;


    for (let i = 0; i < trace.length; i++) {
      // console.log(trace[i], direction[i] ? "left" : "right", node.val,
      //   node.val == trace[i]
      //   ,
      //   trace[i] > node.val
      //   ,
      //   trace[i] < node.val
      // );

      if (node.val == trace[i]) {
        isValid = false;
        return;
      }
      if (direction[i]) {
        if (!(trace[i] > node.val)) {
          isValid = false;
          return;
        }
      }
      else {
        if (!(trace[i] < node.val)) {
          isValid = false;
          return;
        }
      }
    }

    // console.log(node.val, direction, trace);

    if (node.left)
      dfs(node.left, [...trace, node.val], [...direction, true]);
    if (node.right)
      dfs(node.right, [...trace, node.val], [...direction, false]);

  }



  if (root.left)
    dfs(root.left, [root.val], [true]);
  if (root.right)
    dfs(root.right, [root.val], [false]);

  return isValid;

};
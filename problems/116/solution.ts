/**
 * Definition for Node.
 * class Node {
 *     val: number
 *     left: Node | null
 *     right: Node | null
 *     next: Node | null
 *     constructor(val?: number, left?: Node, right?: Node, next?: Node) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function connect(root: Node | null): Node | null {
  if (!root) return null;
  root.next = null;
  const depthMap = [];

  const getDepthMap = (root, depth = 0) => {
    if (!root) return;
    if (root?.left) {
      if (depthMap.length - 1 <= depth) depthMap.push([]);
      depthMap[depth].push(root.left);
      getDepthMap(root.left, depth + 1);
    }
    if (root?.right) {
      depthMap[depth].push(root.right);
      getDepthMap(root.right, depth + 1);
    }
  };

  getDepthMap(root);

  for (const nodes of depthMap) {
    for (let i = 0; i < nodes.length - 1; i++) {
      nodes[i].next = nodes[i + 1];
    }
  }

  return root;
}

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

interface Node {
  val: number,
  left: Node | null,
  right: Node | null,
  next: Node | null
}

function connect(root: Node | null): Node | null {
  if (!root) return root;

  const sameDepthNodes: Node[][] = [[]];

  const dfs = (node, depth = 0) => {
    // console.log(node, depth, sameDepthNodes);

    if (!node) return;
    if (sameDepthNodes.length - 1 <= depth) sameDepthNodes.push([])
    sameDepthNodes[depth].push(node)

    if (node.left) dfs(node.left, depth + 1)
    if (node.right) dfs(node.right, depth + 1)
  }

  dfs(root);


  for (const nodes of sameDepthNodes) {
    for (let i = 0; i < nodes.length; i++) {
      if (i == nodes.length - 1) nodes[i].next = null;
      else nodes[i].next = nodes[i + 1]
    }
  }

  return root;
};
function allPathsSourceTarget(graph: number[][]): number[][] {
  const result: number[][] = [];

  if (!graph) return result;

  const getPath = (currnetNodeID = 0, path = []) => {

    if (
      currnetNodeID == graph.length - 1)
      result.push([...path, currnetNodeID])

    for (const e of graph[currnetNodeID])
      getPath(e, [...path, currnetNodeID])
  }

  getPath()

  return result.filter(e => {
    return e.length != 0
  })
};
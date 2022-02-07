"use strict";

import { WriteStream, createWriteStream } from "fs";
process.stdin.resume();
process.stdin.setEncoding("utf-8");

let inputString: string = "";
let inputLines: string[] = [];
let currentLine: number = 0;

process.stdin.on("data", function (inputStdin: string): void {
  inputString += inputStdin;
});

process.stdin.on("end", function (): void {
  inputLines = inputString.split("\n");
  inputString = "";

  main();
});

function readLine(): string {
  return inputLines[currentLine++];
}

/*
 * Complete the 'connectedSum' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts UNWEIGHTED_INTEGER_GRAPH graph as parameter.
 */

/*
 * For the unweighted graph, <name>:
 *
 * 1. The number of nodes is <name>Nodes.
 * 2. The number of edges is <name>Edges.
 * 3. An edge exists between <name>From[i] and <name>To[i].
 *
 */

function connectedSum(
  graphNodes: number,
  graphFrom: number[],
  graphTo: number[]
): number {
  const nodes = [];
  for (let i = 0; i < graphNodes; i++) {
    nodes.push(i + 1);
  }
  const rootsWithoutLeafs: number[] = [
    ...nodes.filter(
      (e) => graphFrom.indexOf(e) == -1 && graphTo.indexOf(e) == -1
    ),
  ];
  const roots: number[] = [
    ...nodes.filter((e) => {
      return graphTo.indexOf(e) == -1 && rootsWithoutLeafs.indexOf(e) == -1;
    }),
  ];

  let result = 0;
  const graphMap: number[][] = [];
  for (let i = 0; i < graphFrom.length; i++) {
    graphMap.push([graphFrom[i], graphTo[i]]);
  }

  let weight: number;
  const getWeight = (node: number) => {
    graphMap
      .filter((e) => {
        return e[0] == node;
      })
      .forEach((e) => {
        weight += 1;
        getWeight(e[1]);
      });
  };

  roots.forEach((e) => {
    weight = 1;
    getWeight(e);
    console.log(e, weight);
    result += Math.ceil(Math.sqrt(weight));
  });
  console.log(roots);

  return result + rootsWithoutLeafs.length;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const graphNodesEdges: string[] = readLine().split(" ");

  const graphNodes: number = parseInt(graphNodesEdges[0], 10);
  const graphEdges: number = parseInt(graphNodesEdges[1], 10);

  let graphFrom: number[] = [];
  let graphTo: number[] = [];

  for (let i: number = 0; i < graphEdges; i++) {
    const graphFromTo = readLine().split(" ");

    graphFrom.push(parseInt(graphFromTo[0], 10));
    graphTo.push(parseInt(graphFromTo[1], 10));
  }

  const result: number = connectedSum(graphNodes, graphFrom, graphTo);

  ws.write(result + "\n");

  ws.end();
}

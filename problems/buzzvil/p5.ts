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
 * Complete the 'largestArea' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY samples as parameter.
 */

function largestArea(samples: number[][]): number {
  const flat = samples.flat();
  if (!flat || flat.every((e) => e == 0)) return 0;
  if (flat.every((e) => e == 1))
    return Math.min(samples.length, samples[0].length);

  let max = 1,
    prev = 0;
  const testAdj = (j: number, k: number, target: number): boolean => {
    if (samples[j][k] == target) {
      if (
        j - 1 > 0 &&
        k - 1 > 0 &&
        k + 1 < samples.length &&
        j + 1 < samples.length &&
        samples[j - 1][k] == target &&
        samples[j - 1][k - 1] == target &&
        samples[j - 1][k + 1] == target &&
        samples[j][k] == target &&
        samples[j][k - 1] == target &&
        samples[j][k + 1] == target &&
        samples[j + 1][k] == target &&
        samples[j + 1][k - 1] == target &&
        samples[j + 1][k + 1] == target
      )
        return true;
    }
    return false;
  };
  for (let i = 1; i <= samples.length; i++) {
    if (prev == max) return max;
    for (let j = 0; j < samples.length; j++) {
      for (let k = 0; k < samples.length; k++) {
        samples[j][k] += testAdj(j, k, i) ? 1 : 0;
      }
    }
    prev = max;
    max = Math.max(...samples.flat());
  }

  return max;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const samplesRows: number = parseInt(readLine().trim(), 10);

  const samplesColumns: number = parseInt(readLine().trim(), 10);

  let samples: number[][] = Array(samplesRows);

  for (let i: number = 0; i < samplesRows; i++) {
    samples[i] = readLine()
      .replace(/\s+$/g, "")
      .split(" ")
      .map((samplesTemp) => parseInt(samplesTemp, 10));
  }

  const result: number = largestArea(samples);

  ws.write(result + "\n");

  ws.end();
}

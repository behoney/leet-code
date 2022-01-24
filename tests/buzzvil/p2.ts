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
 * Complete the 'programmerStrings' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts STRING s as parameter.
 */

function programmerStrings(s: string): number {
  const target = "programmer".split("");
  let first = 0,
    second = 0;

  const targets = [...target];

  for (let i = 0; i < s.length; i++) {
    if (targets.indexOf(s[i]) >= 0) {
      targets.splice(targets.indexOf(s[i]), 1);
      if (!targets.length) {
        first = i;
        break;
      }
    }
  }

  targets.push(...target);
  for (let i = s.length - 1; i >= 0; i--) {
    if (targets.indexOf(s[i]) >= 0) {
      targets.splice(targets.indexOf(s[i]), 1);
      if (!targets.length) {
        second = i;
        break;
      }
    }
  }

  return second - first - 1;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const s: string = readLine();

  const result: number = programmerStrings(s);

  ws.write(result + "\n");

  ws.end();
}

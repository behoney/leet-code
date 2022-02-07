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
 * Complete the 'matchingBraces' function below.
 *
 * The function is expected to return a STRING_ARRAY.
 * The function accepts STRING_ARRAY braces as parameter.
 */

function matchingBraces(braces: string[]): string[] {
  const open = ["(", "{", "["];
  const close = [")", "}", "]"];
  const result = [];

  // Write your code here
  for (const str of braces) {
    let flag = false;
    const stack = [];

    for (let i = 0; i < str.length; i++) {
      if (open.indexOf(str[i]) != -1) {
        stack.push(str[i]);
      } else if (close.indexOf(str[i]) != -1) {
        if (close.indexOf(str[i]) != open.indexOf(stack.pop())) {
          flag = true;
          result.push("NO");
          break;
        }
      } else {
        console.error("wrong input with", str);
        break;
      }
    }
    if (!flag) result.push(stack.length == 0 ? "YES" : "NO");
  }

  return result;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const bracesCount: number = parseInt(readLine().trim(), 10);

  let braces: string[] = [];

  for (let i: number = 0; i < bracesCount; i++) {
    const bracesItem: string = readLine();
    braces.push(bracesItem);
  }

  const result: string[] = matchingBraces(braces);

  ws.write(result.join("\n") + "\n");

  ws.end();
}

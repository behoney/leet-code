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
 * Complete the 'largestMagical' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING binString as parameter.
 */

function largestMagical(binString: string): string {
  if (binString.length < 2) return binString;
  else if (binString.length == 2)
    return binString[0] == "0" ? binString[1] + binString[0] : binString;

  const str = binString.split("");
  let first = "",
    second = "";

  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {}
  }

  if (!first || !second) return binString;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const binString: string = readLine();

  const result: string = largestMagical(binString);

  ws.write(result + "\n");

  ws.end();
}

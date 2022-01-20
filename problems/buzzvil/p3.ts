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
 * Complete the 'countTeams' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY skills
 *  2. INTEGER minPlayers
 *  3. INTEGER minLevel
 *  4. INTEGER maxLevel
 */

function countTeams(
  skills: number[],
  minPlayers: number,
  minLevel: number,
  maxLevel: number
): number {
  const skillsInRange: number[] = [];
  for (let i = 0; i < skills.length; i++) {
    if (minLevel <= skills[i] && skills[i] <= maxLevel) {
      skillsInRange.push(skills[i]);
    }
  }

  const combination: number[][] = [];

  const getCombination = (current: number[] = [], idx = 0) => {
    if (current.length <= skillsInRange.length && idx < skillsInRange.length) {
      const subset = [...current, skillsInRange[idx]];
      combination.push(subset);
      for (let i = idx + 1; i < skillsInRange.length; i++)
        getCombination(subset, i);
    }
  };
  for (let i = 0; i < skillsInRange.length; i++) {
    getCombination([], i);
  }

  //   console.log(combination.filter((e) => e.length >= minPlayers));
  //   console.log(combination.filter((e) => true));

  return combination.filter((e) => e.length >= minPlayers).length;
}

function main() {
  const ws: WriteStream = createWriteStream(process.env["OUTPUT_PATH"]);

  const skillsCount: number = parseInt(readLine().trim(), 10);

  let skills: number[] = [];

  for (let i: number = 0; i < skillsCount; i++) {
    const skillsItem: number = parseInt(readLine().trim(), 10);

    skills.push(skillsItem);
  }

  const minPlayers: number = parseInt(readLine().trim(), 10);

  const minLevel: number = parseInt(readLine().trim(), 10);

  const maxLevel: number = parseInt(readLine().trim(), 10);

  const result: number = countTeams(skills, minPlayers, minLevel, maxLevel);

  ws.write(result + "\n");

  ws.end();
}

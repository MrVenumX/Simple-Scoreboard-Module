//Scoreboard Modules
/*
MIT License

Copyright (c) 2022 ZenKing

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import { Dimension, world } from "mojang-minecraft";
const dimension = world.getDimension("overworld");

export function getScore(playerName, objectiveName) {
  // get statusMessage
  var score = dimension
    .runCommand(`scoreboard players test ${playerName} ${objectiveName} * *`)
    .statusMessage.split(" ");
  return score[1];
}

export function setScore(playerName, objectiveName, Count) {
  // set Score Players
  try {
    dimension.runCommand(
      `scoreboard players set ${playerName} ${objectiveName} ${Count}`
    );
  } catch (error) {console.error(`setScore Error : ${error}`)}
}

export function addScore(playerName, objectiveName, Count) {
  // add Score Players
  try {
    dimension.runCommand(
      `scoreboard players add ${playerName} ${objectiveName} ${Count}`
    );
  } catch (error) {console.error(`setScore Error : ${error}`)}
}

export function removeScore(playerName, objectiveName, Count) {
  // remove Score Players
  try {
    dimension.runCommand(
      `scoreboard players remove ${playerName} ${objectiveName} ${Count}`
    );
  } catch (error) {console.error(`setScore Error : ${error}`)}
}

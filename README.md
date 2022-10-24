# Simple-Scoreboard-Module
Simple Scoreboard Module For Gametest Framework

```js
/*Scoreboard Modules*/

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
```

import {follow()} from "Follower.js";

export let mouseX = 0;
export let mouseY = 0;
export let fSpeed = 20;

let playerPos = {
  x : 0,
  y : 0
}
let interval = setInterval(mainTick(),50);

function mainTick() {
playerPos = follow(playerPos.x, playerPos.y);
}

document.addEventListener("mousemove", (event) => {
  mouseY = event.clientY;
  mouseX = event.clientX;

});


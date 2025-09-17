import {follow, customize, setFollowY, setFollowX} from "./Follower.js";

export let mouseX = 0;
export let mouseY = 0;
export let fSpeed = 20;
export let followerX = 0;
export let followerY = 0;

let interval = setInterval(function mainTick() {
  follow();
  followerX = setFollowX;
  followerY = setFollowY;
}, 50);

document.addEventListener("mousemove", (event) => {
  mouseY = event.clientY;
  mouseX = event.clientX;
});







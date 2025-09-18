import {follow, customize, setFollowY, setFollowX} from "./Follower.js";

export let mouseX = 0;
export let mouseY = 0;
export let fSpeed = 20;
export let followerX = 0;
export let followerY = 0;
let interval;
let interToggle = 0;

if (matchMedia('(pointer:fine)').matches) {
  document.getElementById("changeButton").style.visibility = "visible";
  alert("Click the <Toggle> button to explore\n this page in a different way.");
}

function toggleInterval() {
  alert("functional");
  interToggle = !interToggle;
  if (interToggle) {
    startMove();
  } else {
    endMove();
  }
}

function startMove() {
document.getElementById("page").style.visibility = "hidden";
document.getElementById("buttons").style.visibility = "visible";
document.getElementById("follower").style.visibility = "visible";
interval = setInterval(function mainTick() {
  follow();
  followerX = setFollowX;
  followerY = setFollowY;
}, 50);
}

function endMove() {
  document.getElementById("page").style.visibility = "visible";
document.getElementById("buttons").style.visibility = "hidden";
document.getElementById("follower").style.visibility = "hidden";
clearInterval(interval);
}

document.addEventListener("mousemove", (event) => {
  mouseY = event.clientY;
  mouseX = event.clientX;
});

document.getElementById("changeButton").addEventListener("click", toggleInterval());










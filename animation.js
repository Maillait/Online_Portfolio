import { mouseX, mouseY, fSpeed, followerX, followerY } from "./main.js";

let walkToggle = 0;
let distanceSum = 0;

export function animateFollower() {
  distanceSum += Math.sqrt((((mouseX - followerX) / fSpeed) * ((mouseX - followerX) / fSpeed)) + (((mouseY - followerY) / fSpeed) * ((mouseY - followerY) / fSpeed)));
  
  // if distance moved is less than 5 pixels
  if (Math.sqrt((((mouseX - followerX) / fSpeed) * ((mouseX - followerX) / fSpeed)) + (((mouseY - followerY) / fSpeed) * ((mouseY - followerY) / fSpeed))) < 5) {
    document.getElementById("charSprite").style.left = "0px";
  } else {
    
    if (distanceSum > 5) {
      walkToggle = !walkToggle;
      distanceSum = 0;
    }
    
    if (walkToggle) document.getElementById("charSprite").style.left = "-79px";
    else document.getElementById("charSprite").style.left = "-157px";
    
  }
  
}

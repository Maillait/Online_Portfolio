import { mouseX, mouseY, fSpeed, followerX, followerY } from "./main.js";

let walkToggle = 0;
let frame = 0;

export function animateFollower() {
  frame++;
  console.log(1);
  
  // if distance moved is less than 5 pixels
  if (Math.sqrt((((mouseX - followerX) / fSpeed) * ((mouseX - followerX) / fSpeed)) + (((mouseY - followerY) / fSpeed) * ((mouseY - followerY) / fSpeed))) < 5) {
    document.getElementById("charSprite").style.left = 0;
    console.log(frame);
  } else {
    
    if (frame > 5) {
      walkToggle = !walkToggle;
      frame = 0;
    }
    
    if (walkToggle) document.getElementById("charSprite").style.left = 79;
    else document.getElementById("charSprite").style.left = 157;
    
  }
  
}

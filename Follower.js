import { mouseX, mouseY, fSpeed, followerX, followerY } from "./main.js";

export function follow() {
  followerX += (mouseX - followerX) / fSpeed;
  followerY += (mouseY - followerY) / fSpeed;

  document.getElementById("follower").style.bottom =
    window.innerHeight - followerY - 100 + "px";
  document.getElementById("follower").style.right =
    window.innerWidth - followerX - 100 + "px";

  console.log(followerX, followerY);
  return;
}

export function customize(image) {
  
}




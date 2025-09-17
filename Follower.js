import { mouseX, mouseY, fSpeed, followerX, followerY } from "./main.js";

export let setFollowX;
export let setFollowY;

export function follow() {
  setFollowX += (mouseX - followerX) / fSpeed;
  setFollowY += (mouseY - followerY) / fSpeed;

  document.getElementById("follower").style.bottom =
    window.innerHeight - setFollowY - 100 + "px";
  document.getElementById("follower").style.right =
    window.innerWidth - setFollowX - 100 + "px";

  console.log(setFollowX, setFollowY);
  return;
}

export function customize(image) {
  
}





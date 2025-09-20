import { mouseX, mouseY, fSpeed, followerX, followerY } from "./main.js";

export let setFollowX = 0;
export let setFollowY = 0;
let custom = 0;

export function follow() {
  setFollowX += (mouseX - followerX) / fSpeed;
  setFollowY += (mouseY - followerY) / fSpeed;

  document.getElementById("follower").style.bottom =
    window.innerHeight - setFollowY - 50 + "px";
  document.getElementById("follower").style.right =
    window.innerWidth - setFollowX - 50 + "px";

  return;
}

export function customize() {
  custom++;
  if (custom > 2) custom = 0;
  alert(custom);
  document.getElementById("charSprite").style.top = calc(-1 * custom * 123) + "px";
}












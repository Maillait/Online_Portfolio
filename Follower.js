import { mouseX, mouseY, fSpeed } from "./main.js";

export function follow(followerX, followerY) {
  followerX += (mouseX - followerX) / fSpeed;
  followerY += (mouseY - followerY) / fSpeed;

  document.getElementById("follower").style.bottom =
    window.innerHeight - followerY - 100 + "px";
  document.getElementById("follower").style.right =
    window.innerWidth - followerX - 100 + "px";

  return { followerX, followerY };
}

export function customize(image) {
  
}


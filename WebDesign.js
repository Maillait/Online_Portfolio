// keeps track of mouse position
document.addEventListener("mousemove", (event) => {
  mouseY = event.clientY;
  mouseX = event.clientX;
});

// declaring variable that store follower and cursor position
let mouseX = 0;
let mouseY = 0;
let followerX = 0;
let followerY = 0;

let interval = setInterval(function () {
  // updating the follower position
  followerX += (mouseX - followerX) / 10;
  followerY += (mouseY - followerY) / 10;

  // re-drawing the follower
  document.getElementById("follower").style.bottom =
    window.innerHeight - followerY - 100 + "px";
  document.getElementById("follower").style.right =
    window.innerWidth - followerX - 100 + "px";
}, 50);


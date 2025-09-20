import { follow, customize, setFollowY, setFollowX } from "./Follower.js";
import { animateFollower } from "./animation.js";

export let mouseX = 0;
export let mouseY = 0;
export let fSpeed = 20;
export let followerX = 0;
export let followerY = 0;

let interval;
let interToggle = 0;

let lastClicked = 0;

if (matchMedia('(pointer:fine)').matches) {
  
  document.addEventListener("keypress", (event) => {
    interToggle = !interToggle;
    if (interToggle) {
      startMove();
    } else {
      endMove();
    }
  });
  
} else {
  document.getElementById("toggler").style.visibility = "hidden";
}

function startMove() {
  document.body.style.backgroundColor = "#748f2b";
  document.getElementById("page").style.visibility = "hidden";
  document.getElementById("buttons").style.visibility = "visible";
  document.getElementById("follower").style.visibility = "visible";
  interval = setInterval(function mainTick() {
  animateFollower();
  follow();
  followerX = setFollowX;
  followerY = setFollowY;
  }, 50);
}

function endMove() {
  window.scrollTo(0, 0);
  document.getElementById("popup").innerText = "";
  document.body.style.backgroundColor = "white";
  document.getElementById("page").style.visibility = "visible";
  document.getElementById("buttons").style.visibility = "hidden";
  document.getElementById("follower").style.visibility = "hidden";
  clearInterval(interval);
}

document.getElementById("buttons").addEventListener("click", (event) => {
  if (!lastClicked) document.getElementById("popup").innerText = "";
  else lastClicked = 0;
});

document.getElementById("styleButton").addEventListener("click", (event) => {
  customize();
});

document.getElementById("picButton").addEventListener("click", (event) => {
  if (confirm("To view images, you will have to go to the main page. Are you sure you want to do this?")) {
  interToggle = !interToggle;
  endMove();
  window.scrollTo(0, 500);
  }
});

document.getElementById("aboutButton").addEventListener("click", (event) => {
  lastClicked = 1;
  document.getElementById("popup").innerText = "Hello, I first began programming in grade 5, with scratch. I stayed on using scratch, with small jaunts into typescript and CPP(for an arduino) until grade 10, when I began to learn CPP and Ti-basic more formally. Since then Ive also learnt HTML, CSS, and JS, as demonstrated in this portfolio.";
});

document.getElementById("exampleButton").addEventListener("click", (event) => {
  lastClicked = 1;
  document.getElementById("popup").innerText = "Here's the URL to my now abandoned scratch account: 'https://scratch.mit.edu/users/Maillait/' Quick disclamer: I have learnt a decent amount about making code look nice and readable since I stopped work on my other 2 repositories. But feel free to look at them.";
});

document.addEventListener("mousemove", (event) => {
  mouseY = event.clientY;
  mouseX = event.clientX;
});





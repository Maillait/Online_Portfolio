import { follow, customize, setFollowY, setFollowX } from "./Follower.js";
import { animateFollower } from "./animation.js";

export let mouseX = 0;
export let mouseY = 0;
export let fSpeed = 20;
export let followerX = 0;
export let followerY = 0;
let interval;
let interToggle = 0;

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
  document.getElementById("popup").innerHTML = "";
  document.body.style.backgroundColor = "white";
  document.getElementById("page").style.visibility = "visible";
  document.getElementById("buttons").style.visibility = "hidden";
  document.getElementById("follower").style.visibility = "hidden";
  clearInterval(interval);
}

document.getElementById("styleButton").addEventListener("click", (event) => {
  customize();
});

document.getElementById("picButton").addEventListener("click", (event) => {
});

document.getElementById("aboutButton").addEventListener("click", (event) => {
  document.getElementById("popup").innerHTML = "<h2>--About--</h2> <p> Hello, I first began programming in grade 5, with scratch. I stayed on using scratch, with small jauntsinto typescript and CPP(for an arduino) until grade 10, when I began to learn CPP and Ti-basic more formally. Sincethen Ive also learnt HTML, CSS, and JS, as demonstrated in this portfolio.</p>";
});

document.getElementById("exampleButton").addEventListener("click", (event) => {
  document.getElementById("popup").innerHTML = "<h2>--Examples--</h2><div style = 'display:flex'><p>Here's a link to my now abandoned scratch account: <a href='https://scratch.mit.edu/users/Maillait/'>Maillait-Scratch</a></p><p>Quick disclamer: I have learnt a decent amount about making code look nice and readable since I stopped work on my other 2 repositories. But feel free to look at them.</p>";
});

document.getElementById("buttons").addEventListener("click", (event) => {
  document.getElementById("popup").innerHTML = "";
});

document.addEventListener("mousemove", (event) => {
  mouseY = event.clientY;
  mouseX = event.clientX;
});


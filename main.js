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
  document.getElementById("toggler").innerHTML = "<h2>--Toggle--</h2><p>To toggle how you are viewing this page, press any key on the keyboard. When in the toggled mode, press things to explore.</p>";
  document.getElementById("toggler").style.visibility = "inherit";
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
  if (confirm("To view images, you will have to go to the main page. Are you sure you want to do this?")) {
  interToggle = !interToggle;
  endMove();
  window.scrollTo(0, 500);
  }
});

document.getElementById("aboutButton").addEventListener("click", (event) => {
 alert("Hello, My name is William Ottenbreit, and I am a grade 11 student at Holy Trinity Academy. In grade 8 I became interrested in programming beause my older brother was studying computer science and I had already done a little bit of scratch in elementary school. The languages I have focused on are C++, HTML, JS, CSS, and ti-Basic, but have touched into TypeScript and scratch. I have used these languages to mess arund with an arduino, make small games, simulations, etc.. The reason that I enjoy coding is because I like solving problems and seeing something that I typed come to life. This portfolio has been designed to represent my current skills and to help me find a part time job or paid internship coding so that I can develop my skills.");
});

document.getElementById("exampleButton").addEventListener("click", (event) => {
  alert("Here is the link to my scratch account: 'https://scratch.mit.edu/users/Maillait/'\nHeres's a link to my github, which I'm still getting used to, but I'm currently working on an engine to build a platformer from, and have some simple CA's that I made on there as well: 'https://github.com/Maillait/'");
});

document.addEventListener("mousemove", (event) => {
  mouseY = event.clientY;
  mouseX = event.clientX;
});









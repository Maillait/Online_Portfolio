export let mouseX = 0;
export let mouseY = 0;
export let fSpeed = 20;

document.addEventListener("mousemove", (event) => {
  mouseY = event.clientY;
  mouseX = event.clientX;
});
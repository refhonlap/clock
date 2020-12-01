const clock = setInterval(clocking, 1000);
function clocking() {
  let d = new Date();
  let t = d.toLocaleTimeString();
  document.querySelector(".clock").innerText = t;
};
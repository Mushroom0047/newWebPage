//!Manual counter
const container = document.querySelector(".counter-box");
const digit = document.querySelector(".digito");
let counter = 0;

container.addEventListener("click", (e) => {
  e.stopPropagation();
  if (e.target.classList.contains("btnAumentar")) {
    counter++;
    digit.textContent = counter;
  }
  if (e.target.classList.contains("btnDisminuir")) {
    if (counter > 0) {
      counter--;
    } else {
      counter = 0;
    }
    digit.textContent = counter;
  }
});
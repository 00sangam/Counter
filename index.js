console.log("Counter");
let increase = document.getElementById("increase");
let decrease = document.getElementById("decrease");
let reset = document.getElementById("reset");
let number = document.getElementById("number");

let num = 0;
number.innerText = 0;

increase.addEventListener("click", () => {
  number.innerText = num += 1;
});

decrease.addEventListener("click", () => {
  if (num <= 0) {
  } else {
    number.innerText = num -= 1;
  }
});

reset.addEventListener("click", () => {
  number.innerText = 0;
  num = 0;
});

let numbers = document.querySelectorAll(".box .number");
let section = document.querySelector(".box");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
    if (!started) {
        numbers.forEach((num) => startCount(num));
    }
    started = true;
  }
};

function startCount(el) {
  let goal = el.dataset.goal;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  },10 / goal);
}
// 
import data from "./js/data.js";

const menu = document.querySelector(".menu__nav");
const dailyBtn = document.querySelector("#dailyBtn");
const weeklyBtn = document.querySelector("#weeklyBtn");
const monthlyBtn = document.querySelector("#monthlyBtn");

const scores = document.querySelectorAll(".comp__score");
const previousScores = document.querySelectorAll(".comp__previous");
let state = "daily";

dailyBtn.classList.toggle("active__button");

console.log(data);

menu.addEventListener("click", (event) => {
  dailyBtn.classList.remove("active__button");
  weeklyBtn.classList.remove("active__button");
  monthlyBtn.classList.remove("active__button");

  if (event.target === dailyBtn) {
    if (state !== "daily") {
      scores.forEach((score, index) => {
        score.innerText = `${data[index].timeframes.daily.current}hrs`;
        animateCSS(score, "bounceIn");
      });
      previousScores.forEach((score, index) => {
        score.innerText = `Yesterday - ${data[index].timeframes.daily.previous}hrs`;
        animateCSS(score, "bounceIn");
      });
      dailyBtn.classList.toggle("active__button");
      state = "daily";
    }
  }

  if (event.target === weeklyBtn) {
    if (state !== "weekly") {
      scores.forEach((score, index) => {
        score.innerText = `${data[index].timeframes.weekly.current}hrs`;
        animateCSS(score, "bounceIn");
      });
      previousScores.forEach((score, index) => {
        score.innerText = `Last Week - ${data[index].timeframes.weekly.previous}hrs`;
        animateCSS(score, "bounceIn");
      });
      weeklyBtn.classList.toggle("active__button");
      state = "weekly";
    }
  }

  if (event.target === monthlyBtn) {
    if (state !== "monthly") {
      scores.forEach((score, index) => {
        score.innerText = `${data[index].timeframes.monthly.current}hrs`;
        animateCSS(score, "bounceIn");
      });
      previousScores.forEach((score, index) => {
        score.innerText = `Last Month - ${data[index].timeframes.monthly.previous}hrs`;
        animateCSS(score, "bounceIn");
      });
      monthlyBtn.classList.toggle("active__button");
      state = "monthly";
    }
  }
});

const animateCSS = (element, animation, prefix = "animate__") =>
  new Promise((resolve) => {
    const animationName = `${prefix}${animation}`;

    element.classList.add(`${prefix}animated`, animationName);

    function handleAnimationEnd(event) {
      event.stopPropagation();
      element.classList.remove(`${prefix}animated`, animationName);
      resolve("Animation ended");
    }

    element.addEventListener("animationend", handleAnimationEnd, { once: true });
  });

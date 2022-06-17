const question = document.querySelector(".ques");
const answer = document.querySelector(".answer");
const arrow = document.querySelector(".arrow");

question.addEventListener("click", function () {
  answer.classList.toggle("hidden");
  question.classList.toggle("activeQuestion");
  arrow.classList.toggle("arrowActive");
});

/*math to random number*/
const num1 = Math.ceil(Math.random() * 10);
const num2 = Math.ceil(Math.random() * 10);
/*getElement*/
const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
/*get score*/
const scoreEl = document.getElementById("score");
let score = /* to change number to string*/ JSON.parse(localStorage.getItem("score"));
/*if do not have score make = 0*/
if (!score) {
  score = 0;
}
/*to send score to score text*/
scoreEl.innerText = `score: ${score}`

questionEl.innerText = `What is ${num1} Multiply by ${num2}?`;
/* Arithmetic operation*/
const correctAns = num1 * num2;
/*Confirm the calculation process and send the result to save*/
formEl.addEventListener("submit", () => {
  const userAns = +inputEl.value;
  if (userAns === correctAns) {
    score++
    updateLocalStorage()
  } else {
    score--
    updateLocalStorage()
  }
})
/*Memorization process with conversion from string to number */
function updateLocalStorage() {
  localStorage.setItem("score", JSON.stringify(score))
}

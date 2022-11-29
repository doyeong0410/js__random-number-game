const formEnter = document.querySelector("#number-enter");
const guessNum = document.querySelector("#guess input");
const choice1 = document.querySelector("#choice span:first-child");
const choice2 = document.querySelector("#choice span:last-child");
const result = document.querySelector("#result");

document.getElementById("title").style.fontSize = "40px";

function randomRange(min, max) {
  min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function gamePlay(event) {
  event.preventDefault();

  let max = document.getElementById("max").value;
  const guessNumber = Number(guessNum.value);
  const randomNumber = randomRange(0, max);

  choice1.innerText = `You chose: ${guessNumber}`;
  choice2.innerText = `, machine chose: ${randomNumber}`;

	if (guessNumber === randomNumber) {
		result.innerText = "You won!";
	} else {
		result.innerText = "You lost!";
	}
}

formEnter.addEventListener("submit", gamePlay);
let yourInput = document.querySelector("#yourName");
let crushInput = document.querySelector("#crushName");
let button = document.querySelector("button");
const result = document.querySelector("span");

button.addEventListener("click", calculateLove);

function calculateLove() {
  let yourName = yourInput.value;
  let yourCrush = crushInput.value;

  let percent = Math.ceil(Math.random() * 100);

  if (yourName === "anil") {
    result.textContent =
      "You both are made for each other, your love can't be calculated in any calculator";
  } else if (yourName !== "anil" && yourCrush === "coding") {
    result.textContent =
      "This person will surely make you cry. Look for anyone else";
  } else {
    result.textContent = `${yourName} and ${yourCrush} have ${percent}% love`;
  }
  result.style.display = "block";
}

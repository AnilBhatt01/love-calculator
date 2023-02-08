let yourInput = document.querySelector("#yourName");
let crushInput = document.querySelector("#crushName");
let button = document.querySelector("button");
const result = document.querySelector("span");

button.addEventListener("click", calculateLove);

function calculateLove() {
  let yourName = yourInput.value;
  let yourCrush = crushInput.value;
  let yourNameUp = yourName.toUpperCase();
  let yourCrushUp = yourCrush.toUpperCase();

  console.log(yourNameUp, yourCrushUp);

  let percent = Math.ceil(Math.random() * 100);
  if (yourName === "" || yourCrush === "") {
    result.textContent = "Enter name";
  } else if (
    (yourNameUp === "ANIL" || yourNameUp === "SAMHITA") &&
    (yourCrushUp === "SAMHITA" || yourCrushUp === "ANIL")
  ) {
    result.textContent =
      "You both are made for each other, your love can't be calculated in any calculator";
  } else if (yourNameUp === "SAMHITA" && yourCrushUp !== "ANIL") {
    result.textContent =
      "This person will surely make you cry. Look for someone whose name starts with 'A' and ends with 'L'";
  } else {
    result.textContent = `${yourNameUp} and ${yourCrushUp} have ${percent}% love`;
  }
  result.style.display = "block";
}

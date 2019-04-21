let colours = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(255, 0, 255)", "rgb(0, 0, 255)"]

const squares = document.querySelectorAll(".square");
let chosenColour = colours[3];
let displayColour = document.getElementById('displayColour');

displayColour.textContent = chosenColour;

for (let i = 0; i < squares.length; i++) {
  squares[i].style.backgroundColor = colours[i];
}

let colours = generateRandomColours(6)
const squares = document.querySelectorAll(".square");
let winningColour = pickColour();
const displayColour = document.getElementById('displayColour');
const message = document.getElementById('message');
const h1 = document.querySelector('h1');


displayColour.textContent = winningColour;


for (let i = 0; i < squares.length; i++) {
  // add initial colours to squares
  squares[i].style.backgroundColor = colours[i];
  // add event listeners to squares when clicked
  squares[i].addEventListener("click", function(){
    // get the colour of the square
    let clickedColour = this.style.backgroundColor;
    // compare the colour to the chosen colour
    if(clickedColour === winningColour){
      message.textContent = "Correct";
      changeAllSquaresToWinningColour(winningColour);
      h1.style.backgroundColor = winningColour;
    } else {
      message.textContent = "Try Again";
      this.style.backgroundColor = "#232323";
    }

  })
}

function changeAllSquaresToWinningColour(colour) {
  for (var i = squares.length - 1; i >= 0; i--) {
    squares[i].style.backgroundColor = colour;
  }
}

function pickColour() {
  let random = Math.floor(Math.random() * colours.length)
  return colours[random];
}

function generateRandomColours(number){
  let array = [];
  for (var i = 0; i < number; i++) {
    array.push(randomColour())
  }
  return array;
}

function randomColour() {
  let red = Math.floor(Math.random() * 256);
  let green = Math.floor(Math.random() * 256);
  let blue = Math.floor(Math.random() * 256);
  let rgb = `rgb(${red}, ${green}, ${blue})`;
  return rgb
}

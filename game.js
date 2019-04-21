let numberOfSquares = 6;
let colours = [];
let winningColour;
const squares = document.querySelectorAll('.square');
const displayColour = document.getElementById('displayColour');
const message = document.getElementById('message');
const h1 = document.querySelector('h1');
const resetButton = document.getElementById('reset');
const modeButtons = document.querySelectorAll(".mode");

init();

function init(){
  setUpModeButtons();
  setUpSquares();
  reset();
}

resetButton.addEventListener("click", function(){
  reset();
})

function setUpSquares(){
  for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(){
      let clickedColour = this.style.backgroundColor;
      if(clickedColour === winningColour){
        message.textContent = "Correct";
        changeAllSquaresToWinningColour(winningColour);
        h1.style.backgroundColor = winningColour;
        resetButton.textContent = "Play again?"
      } else {
        message.textContent = "Try Again";
        this.style.backgroundColor = "#232323";
      }

    })
  }
}

function setUpModeButtons(){
  for(i = 0; i < modeButtons.length; i++){
    modeButtons[i].addEventListener("click", function(){
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? numberOfSquares = 3 : numberOfSquares = 6;
      reset();
    })
  }
}

function reset(){
  colours = generateRandomColours(numberOfSquares);
  winningColour = pickColour();
  displayColour.textContent = winningColour;
  resetButton.textContent = "New Colours";
  message.textContent = "";
  h1.style.backgroundColor = "steelblue";
  for (let i = 0; i < squares.length; i++){
    if(colours[i]){
      squares[i].style.display = "";
      squares[i].style.backgroundColor = colours[i];
    } else {
      squares[i].style.display = "none";
    }
  }
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

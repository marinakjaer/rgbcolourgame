let colours = ["rgb(255, 0, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)", "rgb(255, 0, 255)", "rgb(0, 0, 255)"]

const squares = document.querySelectorAll(".square");
let winningColour = colours[3];
let displayColour = document.getElementById('displayColour');

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
      alert("you win");
    } else {
      this.style.backgroundColor = "#232323";
    }

  })
}

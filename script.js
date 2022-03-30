const gameContainer = document.getElementById("game");
const scoreKeeper = document.querySelector("h2")

let score = 0;
let guesses = 0;

const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


// here is a helper function to shuffle an array
// it returns the same array with values shuffled
// it is based on an algorithm called Fisher Yates if you want ot research more
function shuffle(array) {
  let counter = array.length;

  // While there are elements in the array
  while (counter > 0) {
    // Pick a random index
    let index = Math.floor(Math.random() * counter);

    // Decrease counter by 1
    counter--;

    // And swap the last element with it
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

// this function loops over the array of colors
// it creates a new div and gives it a class with the value of the color
// it also adds an event listener for a click for each card
function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    // create a new div
    const newDiv = document.createElement("div");

    // give it a class attribute for the value we are looping over
    newDiv.classList.add(color);
    newDiv.style.backgroundColor = "white";

    // call a function handleCardClick when a div is clicked on
    newDiv.addEventListener("click", handleCardClick);

    // append the div to the element with an id of game
    gameContainer.append(newDiv);
  }
}

let colorsToCompare=[];
let clickedCards=[];
// TODO: Implement this function!
function handleCardClick(event) {
  if(clickedCards.length < 2 && event.target.style.backgroundColor === "white"){
  // you can use event.target to see which element was clicked
  const clickedCard = event.target;
  if (clickedCard != clickedCards[0]){
  clickedCards.push(clickedCard);
  const clickedColor = clickedCard.getAttribute('class');
  clickedCard.style.backgroundColor = clickedColor;
  colorsToCompare.push(clickedColor);}
  if (colorsToCompare.length === 2){
    console.log("it's time to comapre baby!!")
    if (colorsToCompare[0] === colorsToCompare[1]){
      console.log ("they the same!")
      clickedCards= [];
      score ++; 
      guesses ++;
      if (score === 5){
        console.log("a winner is you!")
        alert("you did it!");
      }
    } else {
      guesses ++;
      setTimeout(function(){
        console.log(clickedCards[0])
        clickedCards[0].style.backgroundColor = "white";
        clickedCards[1].style.backgroundColor = "white";
        clickedCards= [];
      }, 1000);
    }
    colorsToCompare = [];
  }
  }
}





// when the DOM loads
createDivsForColors(shuffledColors);

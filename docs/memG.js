let score =0;
const startButton = document.getElementById("startButton")
const message = document.getElementById("message")
const moves = document.getElementById("moveCounter");
const timeValue = document.getElementById("time");
const numberOfPics = 15;
const imagePath = './images/';
const imageExtension = '.jpg';
const cards = [];
let shuffledArray = [];
let haveChosen = "false"
let prevCards = ""
let sec = 0
let mins = 0
//Initial moves and win count
let movesCount = 0

//Items array
const items = [
    { name: "1", image: "pic1.png" },
    { name: "2", image: "pic2.png" },
    { name: "3", image: "pic3.png" },
    { name: "4", image: "pic4.png" },
    { name: "5", image: "pic5.png" },
    { name: "6", image: "pic6.png" },
    { name: "7", image: "pic7.png" },
    { name: "8", image: "pic8.png" },
    { name: "9", image: "pic9.png" },
    { name: "10", image: "pic10.png" },
    { name: "11", image: "pic11.png" },
    { name: "12", image: "pic12.png" },
    { name: "13", image: "pic13.png" },
    { name: "14", image: "pic14.png" },
    { name: "15", image: "pic15.png" },
  ];


function shuffler() {
    // Loop through each picture and add it 2 times
    for (let i = 1; i <= 15; i++) {
      cards.push(`${imagePath}pic${i}${imageExtension}`);
    }
    // Shuffle 
    const shuffledCards = cards.sort(() => Math.random() - 0.5);
    console.log(shuffledCards);
    console.log(cards)
    return shuffledCards;
  }
  
function insertImages() {
        const imageTable = document.getElementById("imageTable");
    const numRows = imageTable.rows.length;
    const numCols = imageTable.rows[0].cells.length;
  for (let i = 0; i < numRows; i++) {
    for (let j = 0; j < numCols; j++) {
        const img = document.createElement("img");
        img.src = shuffledCards[cardIndex++];
    }
  }
}



// //Put them into the table
// function insertImages() {
//     const imageTable = document.getElementById("imageTable");
//     const numRows = imageTable.rows.length;
//     const numCols = imageTable.rows[0].cells.length;
//     let cardIndex = 0;
  
//     for (let i = 0; i < numRows; i++) {
//       for (let j = 0; j < numCols; j++) {
//         const img = document.createElement("img");
//         img.src = "./images/hidden.png";
    
//         const cell = document.createElement("td");
//         cell.appendChild(img);
//         imageTable.rows[i].appendChild(cell);

//         // Reveal image on click
//         cell.addEventListener('click', () => {
//             const selectedImg = shuffledArray[cardIndex];
//             console.log(`Previous img = ${prevCards}`)
//             img.src = selectedImg;
//             console.log(`Selected img = ${selectedImg}`)
//             cardIndex++;

//             // Compare images
//             if (haveChosen == "false"){
//                 prevCards = selectedImg
//                 console.log(`Has Chosen: ${haveChosen} GOING IN`)
//                 console.log(`Previous img = ${prevCards} FIRST CHOICE` )
//                 console.log("")
//                 message.innerText = "Select Another"
//                 haveChosen = "true" 
//                 console.log(`Has Chosen: ${haveChosen} COMING OUT`)
//                 console.log("")
//             }
//             else if (prevCards === selectedImg) {
//                     message.innerText = "You got a match!";

//             } else if (!(prevCards === selectedImg)) {
//                 message.innerText = "Try again";
//                 console.log(`Has Chosen: ${haveChosen} GOING IN`)
//                 prevCards = "";
//                 console.log(`Previous img = ${prevCards} reset TRY AGAIN`)
//                 haveChosen = "false"
//                 console.log(`Has Chosen: ${haveChosen} COMING OUT`)

//             }
//         });

//       }
//     }
// }
  
  
// What happpans when you press the button


function startGame(){
    startButton.style.display = "none";
    message.innerText = "GOOD LUCK";
    
    shuffledArray = shuffler();
    insertImages();
    

}

// const timeGenerator = () => {
//     sec += 1;
//     if (sec >= 60) {
//       mins += 1;
//       sec = 0;
//     }
//     //format time before displaying
//     let secPass = sec < 10 ? `0${sec}` : sec;
//     let minsPass = mins < 10 ? `0${mins}` : mins;
//     timeValue.innerHTML = `<span>Time:</span>${minsPass}:${secPass}`;
//   };

//   const movesCounter = () => {
//     movesCount += 1;
//     moves.innerHTML = `Moves:${movesCount}`;
//   };

// Start button event listener 
startButton.addEventListener("click", startGame);
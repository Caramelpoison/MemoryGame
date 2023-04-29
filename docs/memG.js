let moves = 0;
let prvImg = false
let nextImg = false
let canFlip = true

let timer
let startTime = null;
let timePassed = 0;

const cardArea = document.getElementById('cardArea')
const moveCounter = document.getElementById('moveCounter')
const restartButton = document.getElementById('restartButton')
const timeD = document.getElementById('time')
const images = [
    './images/pic1.jpg',    './images/pic1.jpg',
    './images/pic2.jpg',    './images/pic2.jpg',
    './images/pic3.jpg',    './images/pic3.jpg',
    './images/pic4.jpg',    './images/pic4.jpg', 
    './images/pic5.jpg',    './images/pic5.jpg',
    './images/pic6.jpg',    './images/pic6.jpg',
    './images/pic7.jpg',    './images/pic7.jpg',
    './images/pic8.jpg',    './images/pic8.jpg',
    './images/pic9.jpg',    './images/pic9.jpg',
    './images/pic10.jpg',   './images/pic10.jpg',
    './images/pic11.jpg',   './images/pic11.jpg',
    './images/pic12.jpg',   './images/pic12.jpg',
    './images/pic13.jpg',   './images/pic13.jpg',
    './images/pic14.jpg',   './images/pic14.jpg',
    './images/pic15.jpg',   './images/pic15.jpg',
];




function startGame() {
    const shuffledImages = shuffle(images)

    shuffledImages.forEach(imagePath => {
        const card = document.createElement('div')
        card.classList.add('card')
        card.image = imagePath

        const img = document.createElement('img')
        img.src = imagePath
        img.style.display = 'none'
        card.appendChild(img);
        card.addEventListener('click', cardClick)
        cardArea.appendChild(card)
    });

    moves = 0;
    moveCounter.innerText = 'Moves: 0'
    timePassed = 0;
    timeD.innerText = 'Time: 0:00'
    
    timer = setInterval(() => {
        elapsedTime = Date.now() - startTime;
        const minutes = Math.floor(elapsedTime / 60000);
        const seconds = Math.floor((elapsedTime % 60000) / 1000);
        timeD.innerText = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }, 1000);
}



function shuffle(cards) {
    let cardI = cards.length;
    let temporaryValue, randomIndex;

    while (cardI !== 0) {
        randomIndex = Math.floor(Math.random() * cardI);
        cardI -= 1;

        temporaryValue = cards[cardI];
        cards[cardI] = cards[randomIndex];
        cards[randomIndex] = temporaryValue;
    }
    return cards;
}

//shows the cards
function cardClick(event) {
    if (!canFlip || this.classList.contains('shown') || this.classList.contains('matched')) {
        return;
    }
    this.classList.add('shown');
    this.querySelector('img').style.display = 'block'
        console.log(`Previous is ${prvImg}`)

        if (!startTime) {
            startTime = Date.now();
            setInterval(function() {
              elapsedTime = Date.now() - startTime;
              const minutes = Math.floor(elapsedTime / 60000);
              const seconds = Math.floor((elapsedTime % 60000) / 1000)
              timeD.innerText = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`
            }, 1000);
          }

    if (prvImg ==false) {
        console.log(`Previous is ${prvImg}`)
        prvImg = this;
        console.log(`Previous is ${prvImg}`)
    } else if (!nextImg) { 
        nextImg = this;
        moves = moves + 1;
        moveCounter.innerText = `Moves: ${moves}`

        if (prvImg.image === nextImg.image) {
            prvImg.classList.add('matched')
            nextImg.classList.add('matched')
            prvImg = false
            nextImg = false;

            const unmatchedCards = document.querySelectorAll('.card:not(.matched)')
        if (unmatchedCards.length === 0) {
            clearInterval(timer)
            setTimeout(() => {
            cardArea.innerHTML = '<h1>You have won the game!</h1>'
            restartButton.innerText ="Restart Game"
    }, 1000);
}
        } else {
            canFlip = false;
            setTimeout(() => {
                prvImg.classList.remove('shown');
                nextImg.classList.remove('shown');
                prvImg.querySelector('img').style.display = 'none'
                nextImg.querySelector('img').style.display = 'none'
                prvImg = false
                nextImg = false
                canFlip = true
            }, 1500);
        }
    }
}

function restartGame() {
    clearInterval(timer)
    startTime = null;
    cardArea.innerHTML = ''
    startGame()
}
restartButton.addEventListener('click', restartGame)
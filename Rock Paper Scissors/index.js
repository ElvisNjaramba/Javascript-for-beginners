const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('results');
const possibleChoices = document.querySelectorAll('button');
let computerChoice
let userChoice
let result

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getresult()

}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1

    if (randomNumber === 1) {
        computerChoice = 'rock'
    }
    if (randomNumber === 2) {
        computerChoice = 'scissors'
    }
    if (randomNumber === 3) {
        computerChoice = 'paper'
    }

    computerChoiceDisplay.innerHTML = computerChoice
}

function getresult() {
    if (computerChoiceDisplay === userChoice) {
        result = "Draw"
    }
    if (computerChoiceDisplay === 'rock' && userChoice === 'paper') {
        result = "You Won!!"
    }
    if (computerChoiceDisplay === 'rock' && userChoice === 'scissors') {
        result = "You Lost!!"
    }
    if (computerChoiceDisplay === 'scissors' && userChoice === 'paper') {
        result = "You Lost!!"
    }
    if (computerChoiceDisplay === 'scissors' && userChoice === 'rock') {
        result = "You Won!!"
    }
    if (computerChoiceDisplay === 'paper' && userChoice === 'scissors') {
        result = "You Won!!"
    }
    if (computerChoiceDisplay === 'paper' && userChoice === 'rock') {
        result = "You Lost!!"
    }

    resultDisplay.innerHTML = result
}
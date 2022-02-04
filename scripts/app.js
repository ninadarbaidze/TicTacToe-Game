const gameData = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
]

//help variable
let editedPlayer = 0
let activePlayer = 0
let currentRound = 1
let gameIsOver = false

//will use this array later in another playername
const players = [
    {
        name: '',
        symbol: 'X'
    },
    {
        name:'',
        symbol: 'O'
    },
]

let getAside = document.getElementById('config-overlay')
let backdrop = document.getElementById('backdrop')
let formElement = document.querySelector('form')
let activePlayerName = document.getElementById('active-player-name')
let gameOverElement = document.getElementById('game-over')
let winnerName = document.getElementById('winner-name')

let editButton1 = document.getElementById('edit-player-1-btn')
let editButton2 = document.getElementById('edit-player-2-btn')
let cancelButton = document.getElementById('cancel-config-btn')
let playerName = document.querySelector('#player1 h3')//
let errorMessage = document.getElementById('error')
let startNewGame = document.getElementById('start-game-btn')
let gameArea = document.getElementById('active-game')
// let gameFieldLis = document.querySelectorAll('#game-board li')
let gameBoard = document.getElementById('game-board')

editButton1.addEventListener('click', playerConfig)
editButton2.addEventListener('click', playerConfig)
cancelButton.addEventListener('click', cancelConfig)
backdrop.addEventListener('click', cancelConfig)

formElement.addEventListener('submit', savePlayerName)

startNewGame.addEventListener('click', startGame)

// for (gameFieldLi of gameFieldLis) {
//     gameFieldLi.addEventListener('click', selectGameField)
// }

//2nd way
gameBoard.addEventListener('click', selectGameField)




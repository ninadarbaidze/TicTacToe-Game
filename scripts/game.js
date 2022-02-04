function restartGame() {
    activePlayer = 0
    currentRound = 1
    gameIsOver = false 
    gameOverElement.firstElementChild.innerHTML = 'You won, <span id="winner-name">PLAYER NAME</span>!'
    gameOverElement.style.display = 'none'

    let gameBoardIndex = 0 
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            gameData[i][j] = 0 //reset inner stored 1 da 2s
            const gameBoardItemElement = gameBoard.children[gameBoardIndex]
            gameBoardItemElement.textContent = '' //nulling x and y
            gameBoardItemElement.classList.remove('disabled') //disabling x and y styling
            gameBoardIndex++
        }

    }
}

function startGame() {
    if (players[0].name === '' || players[1].name === '') {
        alert('Please set custom player names')
        return //stops next code to execute
    } 

    restartGame()

    
    activePlayerName.textContent = players[activePlayer].name
    gameArea.style.display = 'block'
    
  
}


function switchPlayer() {
    if (activePlayer === 0) {
        activePlayer = 1
    } else {
        activePlayer = 0
    }

    activePlayerName.textContent = players[activePlayer].name
}


function selectGameField(event) {
    //if clicked in empty space inside ol
    if (event.target.tagName !== 'LI' || gameIsOver) { //if true === 0
        return
    }

    //not to write event.target every time
    const selectedField = event.target

    
     //it should start with 0, but arrays start with 1, we deduct and give it a number data type
     const selectedColumn = selectedField.dataset.col - 1
     const selectedRow = selectedField.dataset.row - 1 

     //if someone clicks on already selected square, we stop the code.
    if (gameData[selectedRow][selectedColumn] > 0) {
        alert('please select an empty square')
        return 
    }

    // event target will give us the value of last item in the ol that is clicked, e.g li.
    event.target.textContent = players[activePlayer].symbol //players 0 
    event.target.classList.add('disabled') 

   

    //first raw then col, bcause rows are first. as a value. it's already 0-s in the raw, so when activeplayer is 0 we cant see where it clicked
    gameData[selectedRow][selectedColumn] = activePlayer + 1
    console.log(gameData)

    const winnerId = checkForGameOver()
    if (winnerId !== 0)  {
        endGame(winnerId)
    }  
    //increase round in every iteration
    currentRound++ 
    switchPlayer()
}


function checkForGameOver() {

    //checking the rows for equality
    for (let i = 0; i < 3; i++) {
        
        if (
            gameData[i][0] > 0 &&
            gameData[i][0] === gameData[i][1] && 
            gameData[i][1] === gameData[i][2] 
        ) {
            return gameData[i][0] //returning player id

        }

    }
    //checking the columns for equality

    for (let i = 0; i < 3; i++) {
        
        if (
            gameData[0][i] > 0 &&
            gameData[0][i] === gameData[1][i] &&
            gameData[1][i] === gameData[2][i] 

        ) {
            return gameData[0][i]
        }

    }

    //diagonal top left to bottom right
    if (
        gameData[0][0] > 0 &&
        gameData[0][0] === gameData[1][1] &&
        gameData[1][1] === gameData[2][2]
    ) {
        return gameData[0][0]
    }

     //diagonal bottom left to top right
     if (
        gameData[2][0] > 0 &&
        gameData[2][0] === gameData[1][1] &&
        gameData[1][1] === gameData[0][2]
    ) {
        return gameData[2][0]
    }

    if (currentRound === 9) {
        return -1
    }

    return 0
}

function endGame(winnerId) {
        gameIsOver = true
        gameOverElement.style.display = 'block'

        if (winnerId > 0) {
            const winnerNameFinal = players[winnerId - 1].name
            winnerName.textContent = winnerNameFinal
        } else {
            gameOverElement.firstElementChild.textContent = "It's a draw"
        }
        
       
}





// function checkForGameOver() { longer version
//     if  (
//         gameData[0][0] > 0 &&
//         gameData[0][0] === gameData[0][1] && 
//         gameData[0][1] === gameData[0][2]
//     ){
//         return gameData[0][0] //returning player id
//     }
//     if (
//         gameData[1][0] > 0 &&
//         gameData[1][0] === gameData[1][1] && 
//         gameData[1][1] === gameData[1][2]
//     ) {
//         return gameData[1][0] //returning player id

//     }

//     if (
//         gameData[2][0] > 0 &&
//         gameData[2][0] === gameData[2][1] && 
//         gameData[2][1] === gameData[2][2]
//     ) {
//         return gameData[2][0] //returning player id

//     }



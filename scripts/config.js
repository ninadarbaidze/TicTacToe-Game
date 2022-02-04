
//display overlay

function playerConfig(event) {   
    getAside.style.display = 'block'
    backdrop.style.display = 'block'
    //get access to the clicked butoon, storing player id ex. 1 or 2, shevedit button-is clasebshi data=dataset
    editedPlayer = +event.target.dataset.playerid 
   
    }   

//close config form

function cancelConfig() {
        
    getAside.style.display = 'none'
    backdrop.style.display = 'none'
    formElement.firstElementChild.classList.remove('error')  
    errorMessage.textContent = '' //errorMessage.remove()
    formElement.firstElementChild.lastElementChild.value = '' //long version, we could get input by id

}

//submit event

function savePlayerName(event) {
    event.preventDefault() //prevent default javascript submit operation and doesn't refresh the code
    const formData = new FormData(event.target)// formData() is a blueprint key/value. event.target is a form elements. From the server point of view, that looks like a usual form submission.
    const getPlayerName = formData.get('playername').trim() //it's looking for name field only. trim() deletes white space in front or after the string


    if (!getPlayerName) { // getPlayerName === '' if false
        errorMessage.textContent = 'Please enter a valid name'
        event.target.firstElementChild.classList.add('error')
        return //when entering return, code below this statements won't be executed, because it will return false! why execute other code when false
    }

    //getting player id dynamically
    const updatedPlayerData = document.getElementById('player' + editedPlayer)
    //change playername with entered name
    updatedPlayerData.children[1].textContent = getPlayerName
    //acces to the array in app.js which we'll use dinamically
    players[editedPlayer - 1].name = getPlayerName

    cancelConfig()

}



var playersList = [];




function add(){

    let playerToAdd = document.getElementById("userInput").value;
    if (playerToAdd != ""){
        playersList.push(playerToAdd);
        console.log(playersList);
        console.log(playersList.length);
        document.getElementById("userInput").value = null;
        document.getElementById("lastPlayerAddedLogContainer").style.visibility = "visible";
        lastAddedPlayerLog.innerHTML = `Last added: ${playerToAdd}`;
        document.getElementById("allPlayersLogContainer").style.visibility = "visible";
        allPlayersLog.innerHTML += `${playerToAdd}<br>`;
    } else {
        alert("Can't add empty values!");
    }
}

function randomPrint(){
    if (playersList.length != 0) {
        let random = Math.random();
        let playerID = Math.floor(random * playersList.length);
        let randomSelectedPlayer = playersList[playerID];
        console.log(randomSelectedPlayer);
        answer.innerHTML = `${randomSelectedPlayer}`;
        document.getElementById("answer").style.padding = "20px";
        document.getElementById("main-container").style.height = "300px";
        Lottery

    } else {
        alert("You should add players first!");
    }
}


function clearValues(){
    document.getElementById("userInput").value = null;
    playersList = [];
    answer.innerHTML = ``;
    document.getElementById("answer").style.padding = "0px";
    document.getElementById("main-container").style.height = "190px";
    document.getElementById("lastPlayerAddedLogContainer").style.visibility = "hidden";
    lastAddedPlayerLog.innerHTML = ``;
    document.getElementById("allPlayersLogContainer").style.visibility = "hidden";
    allPlayersLog.innerHTML = `Log:<br>`;
}

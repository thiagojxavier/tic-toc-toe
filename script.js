const nameFirstPlayer = document.getElementById("name-player-1");
const nameSecondPlayer = document.getElementById("name-player-2");
const startBtn = document.getElementById("start-btn");
const body = document.querySelector("body");
const playerName1 = document.querySelector(".name-1");
const playerName2 = document.querySelector(".name-2");
const score1 = document.querySelector(".score-1");
const score2 = document.querySelector(".score-2");
const startGame = document.querySelector(".start-game");
const endGame = document.querySelector(".end-game");
const playAgainBtn = document.querySelector(".play-again");
const turn = document.querySelectorAll(".player-container");
const ticTacToe = document.querySelector(".tic-tac-toe");
const infoPlayers = document.querySelector('.info-players');
const blocks = document.querySelectorAll(".block");
const msgAlert = document.querySelector(".alert");
let turnFirstPlayer = true;
let turns = 0;

const infoGame = {
    player1: {
        nickname: "player1",
        score: 0
    },
    player2: {
        nickname: "player2",
        score: 0
    }
};

const colorSkin = {
    default: ["#F2D0A7", "#40403E"],
    dark: ["#40403E", "#F2F2F2"],
    blue: ["#11468C", "#2384D9"]
};

startBtn.addEventListener("click", () => {
    setInfoPlayers();

    setColor();

    startBtn.disabled = true;

    disappearing(startGame);
});

function setInfoPlayers() {
    if(nameFirstPlayer.value) {
        infoGame.player1.nickname = nameFirstPlayer.value;
    }

    if(nameSecondPlayer.value) {
        infoGame.player2.nickname = nameSecondPlayer.value;
    }

    playerName1.innerText += infoGame.player1.nickname;
    playerName2.innerText += infoGame.player2.nickname;

    showScorePlayer();

}

function setColor() {
    const skinSelected = document.querySelector('input[name="skin"]:checked').value;

    document.documentElement.style.setProperty("--color-table-1", colorSkin[skinSelected][0]);
    document.documentElement.style.setProperty("--color-table-2", colorSkin[skinSelected][1]);
}

function showScorePlayer() {
    score1.innerText = infoGame.player1.score;
    score2.innerText = infoGame.player2.score;
}

function disappearing(popUp) {
    ticTacToe.classList.add('disappearing');
    popUp.classList.add('disappearing');

    setTimeout(() => {
        body.classList.remove("dark");
        ticTacToe.classList.remove('disappearing');
        popUp.classList.remove('disappearing');    
        popUp.classList.add("hidden");
        ticTacToe.classList.remove("hidden");
        infoPlayers.classList.remove("hidden");
    }, 900);
}

function markBlock(e) {
    if(e.target.innerText !== "") {
        busyBlock();
        return
    }

    if(turnFirstPlayer === true) {
        e.target.innerText = 'X';
        turns++
        checkVictory("X");
        changeTurn("player1");
        return
    }

    if(turnFirstPlayer === false) {
        e.target.innerText = 'O';
        turns++
        checkVictory("O");
        changeTurn("player2");
        return
    }

}

function busyBlock() {
    msgAlert.classList.add("active");
    setTimeout(() => {
        msgAlert.classList.remove("active");
    }, 4900);
}

function changeTurn(playerCurrent) {
    if(playerCurrent === "player1") {
        turn[0].classList.remove("turn");
        turn[1].classList.add("turn");
    } else {
        turn[1].classList.remove("turn");
        turn[0].classList.add("turn");
    }

    turnFirstPlayer = !turnFirstPlayer;
}

function checkVictory(player) {

    if(turns < 5) {
        return
    }

    const possibleWins1 = blocks[0].innerText === player && blocks[1].innerText === player && blocks[2].innerText === player;
    const possibleWins2 = blocks[0].innerText === player && blocks[3].innerText === player && blocks[6].innerText === player;
    const possibleWins3 = blocks[0].innerText === player && blocks[4].innerText === player && blocks[8].innerText === player;
    const possibleWins4 = blocks[1].innerText === player && blocks[4].innerText === player && blocks[7].innerText === player;
    const possibleWins5 = blocks[2].innerText === player && blocks[4].innerText === player && blocks[6].innerText === player;
    const possibleWins6 = blocks[2].innerText === player && blocks[5].innerText === player && blocks[8].innerText === player;
    const possibleWins7 = blocks[3].innerText === player && blocks[4].innerText === player && blocks[5].innerText === player;
    const possibleWins8 = blocks[6].innerText === player && blocks[7].innerText === player && blocks[8].innerText;

    if(possibleWins1) {
        prepareScene();
        showEndGame(player);
        increaseScoreWinner(player);
        return 
    }

    if(possibleWins2) {
        prepareScene();
        showEndGame(player);
        increaseScoreWinner(player);
        return 
    }

    if(possibleWins3) {
        prepareScene();
        showEndGame(player);
        increaseScoreWinner(player);
        return 
    }

    if(possibleWins4) {
        prepareScene();
        showEndGame(player);
        increaseScoreWinner(player);
        return 
    }

    if(possibleWins5) {
        prepareScene();
        showEndGame(player);
        increaseScoreWinner(player);
        return 
    }

    if(possibleWins6) {
        prepareScene();
        showEndGame(player);
        increaseScoreWinner(player);
        return 
    }

    if(possibleWins7) {
        prepareScene();
        showEndGame(player);
        increaseScoreWinner(player);
        return 
    }

    if(possibleWins8) {
        prepareScene();
        showEndGame(player);
        increaseScoreWinner(player);
        return 
    }

    if(turns === 9) {
        prepareScene();
        showEndGameDraw();
    }
}

function prepareScene() {
    body.classList.add("dark");
    endGame.classList.remove("hidden");
    ticTacToe.classList.add("hidden");
    infoPlayers.classList.add("hidden");
}

function showEndGame(playerWinner) {
    addContentEndGameVictory(playerWinner);
}

function showEndGameDraw() {
    addContentEndGameDraw();
}

function increaseScoreWinner(player) {
    const playerWinner = discoverPlayerBySymbol(player);

    infoGame[playerWinner].score++
    
    showScorePlayer();
}

function discoverPlayerBySymbol(player) {
    let playerWinner = "";

    if (player === "X") {
        playerWinner = "player1";
    }

    if (player === "O") {
        playerWinner = "player2";
    }

    return playerWinner;
}

function addContentEndGameVictory(playerWinner) {

    const winner = discoverPlayerBySymbol(playerWinner);

    const content = `<h2>Fim de Jogo!</h2>
    <h3>O Player ${winner} venceu a rodada!</h3>
    <img src="./imgs/medal.svg" alt="Imagem de medalha">
    <div>
      <button class="play-again" onclick="restart()">Jogar Novamente</button>
      <button class="end-btn" onclick="totalEndgame()">Encerrar</button>
    </div>`;

    endGame.innerHTML = content;
}

function addContentEndGameDraw() {
    const content = `<h2>Fim de Jogo!</h2>
    <h3>O Embate terminou em empate!</h3>
    <img src="./imgs/swords.png" alt="Imagem de medalha">
    <div>
      <button class="play-again" onclick="restart()">Jogar Novamente</button>
      <button class="end-btn" onclick="totalEndgame()">Encerrar</button>
    </div>`;

    endGame.innerHTML = content;
}

function restart() {
    turns = 0;

    blocks.forEach(item => {
        item.innerText = "";
    });

    disappearing(endGame);
}

function totalEndgame() {
    if(infoGame.player1.score === infoGame.player2.score) {
        endGame.innerHTML = `<h2>O Jogo terminou em empate<h2>
        <img src="./imgs/draw.png" alt="Estatua sentada mostrando tristeza">
        <h3>${infoGame.player1.nickname} ${infoGame.player1.score} X ${infoGame.player2.score} ${infoGame.player2.nickname}<h3>`
        return
    }

    if (infoGame.player1.score > infoGame.player2.score) {
        endGame.innerHTML = `<h2>O player ${infoGame.player1.nickname} obteve a vitória<h2>
        <img src="./imgs/trophy.png" alt="Troféu de vitória">
        <h3>${infoGame.player1.nickname} ${infoGame.player1.score} X ${infoGame.player2.score} ${infoGame.player2.nickname}<h3>`
        return
    }

    endGame.innerHTML = `<h2>O player ${infoGame.player2.nickname} obteve a vitória<h2>
    <img src="./imgs/trophy.png" alt="Troféu de vitória">
    <h3>${infoGame.player1.nickname} ${infoGame.player1.score} X ${infoGame.player2.score} ${infoGame.player2.nickname}<h3>`
}

ticTacToe.addEventListener('click', markBlock);
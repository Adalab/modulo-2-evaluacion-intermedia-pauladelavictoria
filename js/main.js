"use strict";

// constantes
const input = document.querySelector(".js-userInput");
const btn = document.querySelector(".js-btn");
const winner = document.querySelector(".js-winner");
const form = document.querySelector(".js-form");
const nextNumber = document.querySelector(".js-nextNumber");
const tries = document.querySelector(".js-tries");
const playerScoreEl = document.querySelector(".js-playerScore");
const computerScoreEl = document.querySelector(".js-computerScore");
const resetBtn = document.querySelector(".js-resetBtn");

// variables globales
let playerScore = 0;
let computerScore = 0;
const max = 9;
let triesNumber = 10;

// crear número random y número de intentos
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}

// condiciones piedra, papel o tijera
function playGame(randomNumber) {
  if (randomNumber < 3) {
    console.log("El ordenador escoge la piedra");
    return "piedra";
  } else if (randomNumber <= 6) {
    console.log("El ordenador escoge el papel");
    return "papel";
  } else {
    console.log("El ordenador escoge la tijera");
    return "tijera";
  }
}

// condiciones ganar, perder o empatar

function checkWinner(computer) {
  const player = input.value;

  if (player === "piedra") {
    if (computer === "piedra") {
      draw();
    } else if (computer === "tijera") {
      playerWins();
    } else if (computer === "papel") {
      computerWins();
    }
  } else if (player === "tijera") {
    if (computer === "piedra") {
      computerWins();
    } else if (computer === "tijera") {
      draw();
    } else if (computer === "papel") {
      playerWins();
    }
  } else if (player === "papel") {
    if (computer === "piedra") {
      computerWins();
    } else if (computer === "tijera") {
      draw();
    } else if (computer === "papel") {
      playerWins();
    }
  }
}

//Funciones de feedbakc painter
function draw() {
  winner.innerHTML = "empate";
}

function playerWins() {
  winner.innerHTML = "has ganado";
  playerScoreEl.innerHTML = `Jugadora: ${playerScore++}`;
}

function computerWins() {
  winner.innerHTML = "has perdido";
  computerScoreEl.innerHTML = `Ordenador: ${computerScore++}`;
}

//  eventos
btn.addEventListener("click", handleClick);

// función para resetear
function resetGame(ev){
  ev.preventDefault();
  location.reload();
}
resetBtn.addEventListener('click', resetGame);

// función que lo activa todo
function handleClick(ev) {
  ev.preventDefault();
  if (input.value !== "Escoge") {
    if (triesNumber > 1) {
      triesNumber--;
      tries.innerHTML = `Tienes ${triesNumber} intentos`;
      let randomNumber = getRandomNumber(max);
      let computer = playGame(randomNumber);
      checkWinner(computer);
    } else {
      tries.innerHTML = "No te quedan más intentos";
      if (computerScore>playerScore){
        winner.innerHTML = "Ohh... has perdido";
      } else if (playerScore>computerScore) {
        winner.innerHTML = "¡Bieen! has ganado";
      } else {
        winner.innerHTML = "¡Habéis empatado!";
      }
      btn.classList.add("hidden");
      resetBtn.classList.remove("hidden");
    }
  }
}

"use strict";

// constantes
const input = document.querySelector(".js-userInput");
const btn = document.querySelector(".js-btn");
const winner = document.querySelector(".js-winner");
const form = document.querySelector(".js-form");
const nextNumber = document.querySelector(".js-nextNumber");
const tries = document.querySelector(".js-tries");

// crear número random y número de intentos
const max = 9;
let triesNumber = 10;
function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
let r = getRandomNumber(max);
let computer =  Game();

// condiciones piedra, papel o tijera
function Game() {
  if (r < 3) {
    console.log("El ordenador escoge la piedra");
    return "piedra";
  } else if (r <= 6) {
    console.log("El ordenador escoge el papel");
    return "papel";
  } else {
    console.log("El ordenador escoge la tijera");
    return "tijera";
  }
}

// condiciones ganar, perder o empatar

function checkNumber() {
  const player = input.value;
  

  if (player === "piedra") {
    

    if ( computer === "piedra") {
      winner.innerHTML = "empate";
    } else if ( computer === "tijera") {
      winner.innerHTML = "has ganado";
    } else if ( computer === "papel") {
      winner.innerHTML = "has perdido";
    }
  }
   
    else if (player === "tijera") {

      if ( computer === "piedra") {
        winner.innerHTML = "has perdido";
      } else if ( computer === "tijera") {
        winner.innerHTML = "empate";
      } else if ( computer === "papel") {
        winner.innerHTML = "has ganado";
      }
} 

 else if (player === "papel") {

      if ( computer === "piedra") {
        winner.innerHTML = "has perdido";
      } else if ( computer === "tijera") {
        winner.innerHTML = "empate";
      } else if ( computer === "papel") {
        winner.innerHTML = "has ganado";
      }
    }
  }


//  eventos
btn.addEventListener("click", handleClick);

// función que lo activa todo
function handleClick(ev) {

  ev.preventDefault();

  if (triesNumber > 0) {

    triesNumber--;
    tries.innerHTML = `Tienes ${triesNumber} intentos`;
    checkNumber();
    r = getRandomNumber(max);
    computer =  Game();
  }

   else {
    tries.innerHTML = "No te quedan más intentos";
  }
}

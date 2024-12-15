/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let symbols = ["♦", "♥", "♠", "♣"];

let numbers = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

let generateCard = () => {
  let randomSymbol = symbols[Math.floor(Math.random() * symbols.length)];
  let randomNumber = numbers[Math.floor(Math.random() * numbers.length)];
  let grabSymbols = document.getElementsByClassName("suit");
  grabSymbols[0].innerHTML = randomSymbol;
  grabSymbols[1].innerHTML = randomSymbol;
  let grabNumber = document.getElementsByClassName("number")[0];
  grabNumber.innerHTML = randomNumber;

  if (randomSymbol === "♦" || randomSymbol === "♥") {
    grabSymbols[0].style.color = "red";
    grabSymbols[1].style.color = "red";
  } else {
    grabSymbols[0].style.color = "black";
    grabSymbols[1].style.color = "black";
  }
};

document.querySelector("button").addEventListener("click", generateCard);

window.onload = function() {
  generateCard();
  setInterval(generateCard, 10000);
};

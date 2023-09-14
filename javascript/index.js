const bingodiv = document.getElementById("bingo-container");
console.log(bingodiv);

const arrayOfNumbersBingo = [];

const createNumbersCells = function () {
  for (let i = 0; i < 76; i++) {
    const newNumberCell = document.createElement("div");

    newNumberCell.classList.add("numbersDiv");
    newNumberCell.innerText = i + 1;
    bingodiv.appendChild(newNumberCell);
    arrayOfNumbersBingo.push(newNumberCell);
  }
};
createNumbersCells();

const button = document.getElementById("button");
const randomizedNumbers = [];

// we need these numbers to compare them with randomizedNumbers
const numbersFrom1to76 = [];

const oneTo76 = function () {
  for (let i = 1; i <= 76; i++) {
    numbersFrom1to76.push(i);
  }
};
oneTo76();

// button.addEventListener("click", function (e) {
//   let randomNumber = Math.floor(Math.random() * 76) + 1;
//   do {
//     randomizedNumbers.push(randomNumber);
//   } while (!randomizedNumbers.includes(randomNumber));
//   {
//     compare();
//     compareCard();
//     randomizedNumbers.push(randomNumber);
//   }
// });

button.addEventListener("click", function (e) {
  let randomNumber;
  do {
    randomNumber = Math.floor(Math.random() * 76) + 1;
  } while (randomizedNumbers.includes(randomNumber));

  randomizedNumbers.push(randomNumber);
  compare();
  compareCard();
});

function compare() {
  for (let i = 0; i < randomizedNumbers.length; i++) {
    for (let j = 0; j < arrayOfNumbersBingo.length; j++) {
      if (randomizedNumbers[i] === parseInt(arrayOfNumbersBingo[j].innerText)) {
        arrayOfNumbersBingo[j].classList.add("red");
      }
    }
  }
}

const arrayOfPlayerNumbers = [];
function compareCard() {
  for (let i = 0; i < randomizedNumbers.length; i++) {
    for (let j = 0; j < arrayOfPlayerNumbers.length; j++) {
      if (
        randomizedNumbers[i] === parseInt(arrayOfPlayerNumbers[j].innerText)
      ) {
        arrayOfPlayerNumbers[j].classList.add("red");
      }
    }
  }
}
const createPlayerCard = function () {
  const playerArea = document.getElementById("playerArea");
  const playerCard = document.createElement("section");
  playerCard.classList.add("playCard");
  playerArea.appendChild(playerCard);
  for (let i = 0; i < 24; i++) {
    const newCell = document.createElement("div");
    newCell.classList.add("numbersDiv");
    const randomNumber = Math.floor(Math.random() * 76) + 1;
    newCell.innerText = randomNumber;
    playerCard.appendChild(newCell);
    arrayOfPlayerNumbers.push(newCell);
  }
};

const buttonCreate = document.getElementById("createCards");

buttonCreate.addEventListener("click", createPlayerCard);

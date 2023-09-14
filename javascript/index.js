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

    // newNumberCell[i].innerText = i + 1;
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

button.addEventListener("click", function (e) {
  const randomNumber = Math.floor(Math.random() * 76) + 1;
  randomizedNumbers.push(randomNumber);

  compare();
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

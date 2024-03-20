let bingoData = [[], [], [], [], []];
const bingoBody = document.getElementById("bingoBody");

generateNumber = (maxNumber) => {
  const min = maxNumber - 15 + 1;
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(maxNumber);
  let x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
  return x;
};

generateBingoArray = (bingoArray) => {
  switch (bingoArray) {
    case "B": {
      let loop = true;
      while (loop) {
        let x = generateNumber(15);
        if (!bingoData[0].includes(x)) {
          bingoData[0].push(x);
          loop = false;
        }
      }
      break;
    }
    case "I": {
      let loop = true;
      while (loop) {
        let x = generateNumber(30);
        if (!bingoData[1].includes(x)) {
          bingoData[1].push(x);
          loop = false;
        }
      }
      break;
    }
    case "N": {
      let loop = true;
      while (loop) {
        let x = generateNumber(45);
        if (!bingoData[2].includes(x)) {
          bingoData[2].push(x);
          loop = false;
        }
      }
      break;
    }
    case "G": {
      let loop = true;
      while (loop) {
        let x = generateNumber(60);
        if (!bingoData[3].includes(x)) {
          bingoData[3].push(x);
          loop = false;
        }
      }
      break;
    }
    case "O": {
      let loop = true;
      while (loop) {
        let x = generateNumber(75);
        if (!bingoData[4].includes(x)) {
          bingoData[4].push(x);
          loop = false;
        }
      }
      break;
    }
  }
};

populateBingoTable = () => {
  //GENERATE NUMBERS
  while (bingoData.some((row) => row.length !== 5)) {
    generateBingoArray("B");
    generateBingoArray("I");
    generateBingoArray("N");
    generateBingoArray("G");
    generateBingoArray("O");
  }

  //ROW
  for (let i = 0; i < bingoData[0].length; i++) {
    const tableRow = document.createElement("tr");
    //COLUMN
    for (let j = 0; j < bingoData.length; j++) {
      const tableCell = document.createElement("td");
      tableCell.textContent = bingoData[j][i];
      tableRow.appendChild(tableCell);
    }

    bingoBody.appendChild(tableRow);
  }
};

populateBingoTable();

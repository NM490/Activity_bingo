let bingoData = [[], [], [], [], []];
const bingoBody = document.getElementById("bingoBody");
let arrayloop = 0;

let btnToggleCycle = [
  0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
];

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
      tableCell.setAttribute("id", "tcell" + [arrayloop]);
      tableCell.classList.add("td-p-0");

      //if (i == 2 && j == 2) tableCell.textContent = "Free";
     
        const tableCellContent = document.createElement("button");
        tableCellContent.classList.add("btn");
        tableCellContent.classList.add("btn-link");
        tableCellContent.classList.add("btn-max");
        tableCellContent.classList.add("fs-2");
        tableCellContent.classList.add("text-light");
        tableCellContent.classList.add("text-decoration-none");
        tableCellContent.textContent = bingoData[j][i];
        tableCellContent.setAttribute("id", "td" + [arrayloop]);

        tableCell.appendChild(tableCellContent);
      

      arrayloop++;
      tableRow.appendChild(tableCell);
    }

    bingoBody.appendChild(tableRow);
  }
};

populateBingoTable();

td0.onclick = function () {
  if (btnToggleCycle[0] == 0) {
    td0.classList.remove("text-light");
    td0.classList.add("text-dark");
    tcell0.classList.remove("table-dark");
    tcell0.classList.add("table-light");
    btnToggleCycle[0] = 1;
  } else {
    td0.classList.remove("text-dark");
    td0.classList.add("text-light");
    tcell0.classList.remove("table-light");
    tcell0.classList.add("table-dark");
    btnToggleCycle[0] = 0;
  }
};
td1.onclick = function () {
  if (btnToggleCycle[1] == 0) {
    td1.classList.remove("text-light");
    td1.classList.add("text-dark");
    tcell1.classList.remove("table-dark");
    tcell1.classList.add("table-light");
    btnToggleCycle[1] = 1;
  } else {
    td1.classList.remove("text-dark");
    td1.classList.add("text-light");
    tcell1.classList.remove("table-light");
    tcell1.classList.add("table-dark");
    btnToggleCycle[1] = 0;
  }
};
td2.onclick = function () {
  if (btnToggleCycle[2] == 0) {
    td2.classList.remove("text-light");
    td2.classList.add("text-dark");
    tcell2.classList.remove("table-dark");
    tcell2.classList.add("table-light");
    btnToggleCycle[2] = 1;
  } else {
    td2.classList.remove("text-dark");
    td2.classList.add("text-light");
    tcell2.classList.remove("table-light");
    tcell2.classList.add("table-dark");
    btnToggleCycle[2] = 0;
  }
};
td3.onclick = function () {
  if (btnToggleCycle[3] == 0) {
    td3.classList.remove("text-light");
    td3.classList.add("text-dark");
    tcell3.classList.remove("table-dark");
    tcell3.classList.add("table-light");
    btnToggleCycle[3] = 1;
  } else {
    td3.classList.remove("text-dark");
    td3.classList.add("text-light");
    tcell3.classList.remove("table-light");
    tcell3.classList.add("table-dark");
    btnToggleCycle[3] = 0;
  }
};
td4.onclick = function () {
  if (btnToggleCycle[4] == 0) {
    td4.classList.remove("text-light");
    td4.classList.add("text-dark");
    tcell4.classList.remove("table-dark");
    tcell4.classList.add("table-light");
    btnToggleCycle[4] = 1;
  } else {
    td4.classList.remove("text-dark");
    td4.classList.add("text-light");
    tcell4.classList.remove("table-light");
    tcell4.classList.add("table-dark");
    btnToggleCycle[4] = 0;
  }
};
td5.onclick = function () {
  if (btnToggleCycle[5] == 0) {
    td5.classList.remove("text-light");
    td5.classList.add("text-dark");
    tcell5.classList.remove("table-dark");
    tcell5.classList.add("table-light");
    btnToggleCycle[5] = 1;
  } else {
    td5.classList.remove("text-dark");
    td5.classList.add("text-light");
    tcell5.classList.remove("table-light");
    tcell5.classList.add("table-dark");
    btnToggleCycle[5] = 0;
  }
};
td6.onclick = function () {
  if (btnToggleCycle[6] == 0) {
    td6.classList.remove("text-light");
    td6.classList.add("text-dark");
    tcell6.classList.remove("table-dark");
    tcell6.classList.add("table-light");
    btnToggleCycle[6] = 1;
  } else {
    td6.classList.remove("text-dark");
    td6.classList.add("text-light");
    tcell6.classList.remove("table-light");
    tcell6.classList.add("table-dark");
    btnToggleCycle[6] = 0;
  }
};
td7.onclick = function () {
  if (btnToggleCycle[7] == 0) {
    td7.classList.remove("text-light");
    td7.classList.add("text-dark");
    tcell7.classList.remove("table-dark");
    tcell7.classList.add("table-light");
    btnToggleCycle[7] = 1;
  } else {
    td7.classList.remove("text-dark");
    td7.classList.add("text-light");
    tcell7.classList.remove("table-light");
    tcell7.classList.add("table-dark");
    btnToggleCycle[7] = 0;
  }
};
td8.onclick = function () {
  if (btnToggleCycle[8] == 0) {
    td8.classList.remove("text-light");
    td8.classList.add("text-dark");
    tcell8.classList.remove("table-dark");
    tcell8.classList.add("table-light");
    btnToggleCycle[8] = 1;
  } else {
    td8.classList.remove("text-dark");
    td8.classList.add("text-light");
    tcell8.classList.remove("table-light");
    tcell8.classList.add("table-dark");
    btnToggleCycle[8] = 0;
  }
};
td9.onclick = function () {
  if (btnToggleCycle[9] == 0) {
    td9.classList.remove("text-light");
    td9.classList.add("text-dark");
    tcell9.classList.remove("table-dark");
    tcell9.classList.add("table-light");
    btnToggleCycle[9] = 1;
  } else {
    td9.classList.remove("text-dark");
    td9.classList.add("text-light");
    tcell9.classList.remove("table-light");
    tcell9.classList.add("table-dark");
    btnToggleCycle[9] = 0;
  }
};
td10.onclick = function () {
  if (btnToggleCycle[10] == 0) {
    td10.classList.remove("text-light");
    td10.classList.add("text-dark");
    tcell10.classList.remove("table-dark");
    tcell10.classList.add("table-light");
    btnToggleCycle[10] = 1;
  } else {
    td10.classList.remove("text-dark");
    td10.classList.add("text-light");
    tcell10.classList.remove("table-light");
    tcell10.classList.add("table-dark");
    btnToggleCycle[10] = 0;
  }
};
td11.onclick = function () {
  if (btnToggleCycle[11] == 0) {
    td11.classList.remove("text-light");
    td11.classList.add("text-dark");
    tcell11.classList.remove("table-dark");
    tcell11.classList.add("table-light");
    btnToggleCycle[11] = 1;
  } else {
    td11.classList.remove("text-dark");
    td11.classList.add("text-light");
    tcell11.classList.remove("table-light");
    tcell11.classList.add("table-dark");
    btnToggleCycle[11] = 0;
  }
};
td12.onclick = function () {
  if (btnToggleCycle[12] == 0) {
    td12.classList.remove("text-light");
    td12.classList.add("text-dark");
    tcell12.classList.remove("table-dark");
    tcell12.classList.add("table-light");
    btnToggleCycle[12] = 1;
  } else {
    td12.classList.remove("text-dark");
    td12.classList.add("text-light");
    tcell12.classList.remove("table-light");
    tcell12.classList.add("table-dark");
    btnToggleCycle[12] = 0;
  }
};
td13.onclick = function () {
  if (btnToggleCycle[13] == 0) {
    td13.classList.remove("text-light");
    td13.classList.add("text-dark");
    tcell13.classList.remove("table-dark");
    tcell13.classList.add("table-light");
    btnToggleCycle[13] = 1;
  } else {
    td13.classList.remove("text-dark");
    td13.classList.add("text-light");
    tcell13.classList.remove("table-light");
    tcell13.classList.add("table-dark");
    btnToggleCycle[13] = 0;
  }
};
td14.onclick = function () {
  if (btnToggleCycle[14] == 0) {
    td14.classList.remove("text-light");
    td14.classList.add("text-dark");
    tcell14.classList.remove("table-dark");
    tcell14.classList.add("table-light");
    btnToggleCycle[14] = 1;
  } else {
    td14.classList.remove("text-dark");
    td14.classList.add("text-light");
    tcell14.classList.remove("table-light");
    tcell14.classList.add("table-dark");
    btnToggleCycle[14] = 0;
  }
};
td15.onclick = function () {
  if (btnToggleCycle[15] == 0) {
    td15.classList.remove("text-light");
    td15.classList.add("text-dark");
    tcell15.classList.remove("table-dark");
    tcell15.classList.add("table-light");
    btnToggleCycle[15] = 1;
  } else {
    td15.classList.remove("text-dark");
    td15.classList.add("text-light");
    tcell15.classList.remove("table-light");
    tcell15.classList.add("table-dark");
    btnToggleCycle[15] = 0;
  }
};
td16.onclick = function () {
  if (btnToggleCycle[16] == 0) {
    td16.classList.remove("text-light");
    td16.classList.add("text-dark");
    tcell16.classList.remove("table-dark");
    tcell16.classList.add("table-light");
    btnToggleCycle[16] = 1;
  } else {
    td16.classList.remove("text-dark");
    td16.classList.add("text-light");
    tcell16.classList.remove("table-light");
    tcell16.classList.add("table-dark");
    btnToggleCycle[16] = 0;
  }
};
td17.onclick = function () {
  if (btnToggleCycle[17] == 0) {
    td17.classList.remove("text-light");
    td17.classList.add("text-dark");
    tcell17.classList.remove("table-dark");
    tcell17.classList.add("table-light");
    btnToggleCycle[17] = 1;
  } else {
    td17.classList.remove("text-dark");
    td17.classList.add("text-light");
    tcell17.classList.remove("table-light");
    tcell17.classList.add("table-dark");
    btnToggleCycle[17] = 0;
  }
};
td18.onclick = function () {
  if (btnToggleCycle[18] == 0) {
    td18.classList.remove("text-light");
    td18.classList.add("text-dark");
    tcell18.classList.remove("table-dark");
    tcell18.classList.add("table-light");
    btnToggleCycle[18] = 1;
  } else {
    td18.classList.remove("text-dark");
    td18.classList.add("text-light");
    tcell18.classList.remove("table-light");
    tcell18.classList.add("table-dark");
    btnToggleCycle[18] = 0;
  }
};
td19.onclick = function () {
  if (btnToggleCycle[19] == 0) {
    td19.classList.remove("text-light");
    td19.classList.add("text-dark");
    tcell19.classList.remove("table-dark");
    tcell19.classList.add("table-light");
    btnToggleCycle[19] = 1;
  } else {
    td19.classList.remove("text-dark");
    td19.classList.add("text-light");
    tcell19.classList.remove("table-light");
    tcell19.classList.add("table-dark");
    btnToggleCycle[19] = 0;
  }
};
td20.onclick = function () {
  if (btnToggleCycle[20] == 0) {
    td20.classList.remove("text-light");
    td20.classList.add("text-dark");
    tcell20.classList.remove("table-dark");
    tcell20.classList.add("table-light");
    btnToggleCycle[20] = 1;
  } else {
    td20.classList.remove("text-dark");
    td20.classList.add("text-light");
    tcell20.classList.remove("table-light");
    tcell20.classList.add("table-dark");
    btnToggleCycle[20] = 0;
  }
};
td21.onclick = function () {
  if (btnToggleCycle[21] == 0) {
    td21.classList.remove("text-light");
    td21.classList.add("text-dark");
    tcell21.classList.remove("table-dark");
    tcell21.classList.add("table-light");
    btnToggleCycle[21] = 1;
  } else {
    td21.classList.remove("text-dark");
    td21.classList.add("text-light");
    tcell21.classList.remove("table-light");
    tcell21.classList.add("table-dark");
    btnToggleCycle[21] = 0;
  }
};
td22.onclick = function () {
  if (btnToggleCycle[22] == 0) {
    td22.classList.remove("text-light");
    td22.classList.add("text-dark");
    tcell22.classList.remove("table-dark");
    tcell22.classList.add("table-light");
    btnToggleCycle[22] = 1;
  } else {
    td22.classList.remove("text-dark");
    td22.classList.add("text-light");
    tcell22.classList.remove("table-light");
    tcell22.classList.add("table-dark");
    btnToggleCycle[22] = 0;
  }
};
td23.onclick = function () {
  if (btnToggleCycle[23] == 0) {
    td23.classList.remove("text-light");
    td23.classList.add("text-dark");
    tcell23.classList.remove("table-dark");
    tcell23.classList.add("table-light");
    btnToggleCycle[23] = 1;
  } else {
    td23.classList.remove("text-dark");
    td23.classList.add("text-light");
    tcell23.classList.remove("table-light");
    tcell23.classList.add("table-dark");
    btnToggleCycle[23] = 0;
  }
};
td24.onclick = function () {
  if (btnToggleCycle[24] == 0) {
    td24.classList.remove("text-light");
    td24.classList.add("text-dark");
    tcell24.classList.remove("table-dark");
    tcell24.classList.add("table-light");
    btnToggleCycle[24] = 1;
  } else {
    td24.classList.remove("text-dark");
    td24.classList.add("text-light");
    tcell24.classList.remove("table-light");
    tcell24.classList.add("table-dark");
    btnToggleCycle[24] = 0;
  }
};

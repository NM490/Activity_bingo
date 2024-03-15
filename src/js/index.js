let B = false,
    I = false,
    N = false,
    G = false,
    O = false;

function newNumber() {
    let x = Math.floor(Math.random() * 75) + 1;
    if (x <= 15) {
        generateNewNumber(15);
        B = true;
    } else if (x >= 16 && x <= 30) {
        generateNewNumber(30);
        I = true;
    }
    else if (x >= 31 && x <= 45) {
        generateNewNumber(45);
        N = true;
    }
    else if (x >= 46 && x <= 60) {
        generateNewNumber(60);
        G = true;
    }
    else if (x >= 61 && x <= 75) {
        generateNewNumber(75);
        O = true;
    }

    if (B == true && I == true && N == true && G == true && O == true) {
        console.log("BINGO!!!!!!")
    }

}

function generateNewNumber(maxNumber) {
    const min = (maxNumber - 15) + 1;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(maxNumber);

    let x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);

    switch (maxNumber) {
        case 15:
            return console.log(`B: ${x}`)
        case 30:
            return console.log(`I: ${x}`)
        case 45:
            return console.log(`N: ${x}`)
        case 60:
            return console.log(`G: ${x}`)
        case 75:
            return console.log(`O: ${x}`)
    }

}
console.log(newNumber());

let isB = false,
    isI = false,
    isN = false,
    isG = false,
    isO = false;

let B = [], I = [], N = [], G = [], O = [];

function newNumber() {
    let x = Math.floor(Math.random() * 75) + 1;
    if (x <= 15) {
        generateNewNumber(15);
        isB = true;
    } else if (x >= 16 && x <= 30) {
        generateNewNumber(30);
        isI = true;
    }
    else if (x >= 31 && x <= 45) {
        generateNewNumber(45);
        isN = true;
    }
    else if (x >= 46 && x <= 60) {
        generateNewNumber(60);
        isG = true;
    }
    else if (x >= 61 && x <= 75) {
        generateNewNumber(75);
        isO = true;
    }

    if (isB == true && isI == true && isN == true && isG == true && isO == true) {
        console.log("BINGO!!!!!!")
        console.table({B,I,N,G,O})
    }
}

function generateNewNumber(maxNumber) {
    const min = (maxNumber - 15) + 1;
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(maxNumber);

    switch (maxNumber) {
        case 15: {
            let x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
            B.push(x);
            return console.log(`B: ${x}`)
        }
        case 30: {
            let x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
            I.push(x);
            return console.log(`I: ${x}`)
        }
        case 45: {
            let x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
            N.push(x);
            return console.log(`N: ${x}`)
        }
        case 60: {
            let x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
            G.push(x);
            return console.log(`G: ${x}`)
        }
        case 75: {
            let x = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
            O.push(x);
            return console.log(`O: ${x}`)
        }
    }

}
/*
for (let i = 0; i < 100; i++) {
    newNumber();
    if (isB == true && isI == true && isN == true && isG == true && isO == true) {
        break;
    }
}*/

while (!isB || !isI || !isN || !isG || !isO ) {
    newNumber();
}
const { btoa } = require('buffer');
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf-8');
let sum = 0


function period(idRange) { 
    const minRange = Number(idRange[0]);
    const maxRange = Number(idRange[1]);
    for (let eyeD = minRange; eyeD <= maxRange + 1; eyeD++ ) {  // going 1+ through the ID range
        for (let patternLength = 1; patternLength <= Math.floor(String(eyeD).length/2); patternLength++) {  // changing pattern lengths until eyeD/2.floor()
            const arr = [];
            for (let x = 0; x < String(eyeD).length; x += patternLength ) { 
                arr.push(String(eyeD).slice(x, x + patternLength)); // slice the eyeD into equal parts or tries to at least
            }
            if (arr.every(z => z === arr[0]) == true) {
                sum += eyeD; // add this current ID to the sum
                break // break the second for loop to prevent overcounting the same ID
            } else { 
                continue; // if this pattern length does not work, move on to the next one
            }
            
        }
    }
}

function main () { 
    const IDs = input.trim().split(",");
    IDs.forEach(id => period(id.split("-"))); 
    console.log("Invalid IDs =  " + sum);
}


main()
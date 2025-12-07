const { btoa } = require('buffer');
const fs = require("fs")
const input = fs.readFileSync('input.txt', 'utf8');

let joltageSum = 0

function highestJoltage(numArr) { 
    let numOne = 0
    let numTwo = 0
    let j = 0

    numOne = Number(numArr[0])
    for (let i = 0; i < numArr.length - 1; i++) { // 10s place cannot be last digit
        if (Number(numArr[i]) > numOne) { 
            numOne = Number(numArr[i])
            j = i
        } 
    }

    for (let i = j+1; i < numArr.length; i++) { 
         if (Number(numArr[i]) > numTwo) { 
            numTwo = Number(numArr[i])
        } 
    }
    console.log(numOne*10 + numTwo)
    joltageSum = joltageSum + (numOne * 10) + numTwo
}


function main() { 
    const testInput = input.trim().split("\n")
    testInput.forEach(element => highestJoltage(element.split("").map(Number)))
    console.log(joltageSum);
}


main()
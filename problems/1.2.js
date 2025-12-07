let dial = 50
let count = 0



function rotate(command) {
    if (command.startsWith("L")) { 
        for (let i = 0; i < Number(command.slice(1)); i++) {
            dial--;
            if (dial % 100 == 0) { 
                count++
            }

        }
    } else { 
        for (let i = 0; i < Number(command.slice(1)); i++) {
            dial++;
            if (dial % 100 == 0) { 
                count++
            }

        }
    }
}
function main(input) { 
    const commands = input.trim().split('\n');
    commands.forEach(command => rotate(command.trim()));
    console.log(count);
}
const { btoa } = require('buffer');
const fs = require('fs');
const input = fs.readFileSync('input1.txt', 'utf8');
main(input);


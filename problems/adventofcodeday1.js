let count = 0
let dial = 50
function fix_current_rotation(num) { 
    const modulo = num % 100
    if (modulo < 0) {
        return (100 + modulo);
    } else {
        return modulo;
    }
}
function rotate(direction) {
    if (direction.startsWith("L")) {
        check(fix_current_rotation(dial -= Number(direction.slice(1))))
    } else { 
        check(fix_current_rotation(dial += Number(direction.slice(1))))
    }
}
function check(num){ 
    if (num == 0){
        count++
    }
}
function main(input) { 
    const commands = input.trim().split('\n');
    commands.forEach(command => rotate(command.trim()));
    console.log(count);
}
const fs = require('fs');
const input = fs.readFileSync('input.txt', 'utf8');
main(input);
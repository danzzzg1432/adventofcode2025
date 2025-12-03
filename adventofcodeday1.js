let count = 0
let dial = 50
function fix_current_rotation(num) { 
    const modulo = num % 100
    if (modulo < 0) { 
        return (100 + modulo) /* 99 - modulo here also works. Why? if modulo < 0, becomes 99 + modulo due to 
            * PEMDAS. say modulo = -34, becomes 133 i.e. a rotation of 33. this is equivalent to 66 IF you 
            * flip the rotations (i.e. turning right becomes left now). This could be very wrong! All in all, 
            * at the end it all works to 1191 for my solution.
        */
    } else {
        return modulo
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
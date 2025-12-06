const { btoa } = require('buffer');
const fs = require("fs")
const input = fs.readFileSync('input.txt', 'utf8');

sum = 0

function period(idrange) { 
    for (let i = Number(idrange[0]); i < Number(idrange[1]) + 1; i++) { 
        // find length of i
        const string_i = String(i)
        const length_i = string_i.length
        if (length_i % 2 !== 0){ 
            continue
        }
        // now check whether 0:(length_i/2) -> (length_i/2 -> length_i) is equal
        // if it is, add i to the sum
        if (string_i.slice(0, (length_i/2)) == string_i.slice((length_i/2))) {
            sum += i
        }
            
    }
}

function main() { 
    const IDs = input.trim().split(","); // returns array split by commas
    IDs.forEach(id => period(id.split("-")))
    console.log("Sum of all invalid ID's are: " + sum)

}

main()
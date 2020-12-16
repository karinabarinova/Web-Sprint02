"use strict"

let begin = +prompt("Enter beginning of the range", '1');
let end = +prompt("Enter end of the range", '100');

if (isNaN(begin) || isNaN(end)) {
    console.log("Wront input, starting with default values");
    checkDivision();
}
if (begin < end)
    checkDivision(begin, end);

function checkDivision(beginRange = 1, endRange = 100) {
    
    for (; beginRange <= endRange; beginRange++) {
        let print = "";

        print += beginRange;
        if (beginRange % 2 === 0) {
            print += " is even";
        }
        if (beginRange % 3 === 0) {
            if (print.length > 3)
                print += ",";
            print += " is multiple of 3";
        }
        if (beginRange % 10 === 0) {
            if (print.length > 3)
                print += ",";
            print += " is multiple of 10";
        }
        if (print.length <= 3)
            print += " -";
        print += "\n";
        console.log(print);
    }
}
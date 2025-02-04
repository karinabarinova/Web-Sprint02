"use strict"
//tests
// let phrase1 = concat("Hulk", "smash!");
// let output = phrase1;
// console.log(output); // Hulk smash!
// let phrase2 = concat("Leave");
// output = phrase2();// a prompt appears. Enter "Hulk alone!" 
// // into the prompt
// console.log(output); // Leave Hulk alone!
// console.log(phrase2.count); // 1
// output = phrase2();// a prompt appears. Enter "me alone, please!" into the prompt
// console.log(output); // Leave me alone, please!
// output = phrase2();// a prompt appears. Enter "HULK ALONE!" into the prompt
// console.log(output); // Leave HULK ALONE!
// console.log(phrase2.count); // 3
// let phrase3 = concat("Go");
// output = phrase3();// a prompt appears. Enter "away!" into the prompt
// console.log(output); // Go away!
// console.log(phrase3.count); // 1
// console.log(phrase2.count); // 3/* Result in Console panel:Hulk smash!Leave Hulk alone!

function concat(...args) {
    askForSecondString.count = 0;

    function askForSecondString() {
        let str = prompt("Enter string: ", "");
        if (str === null)
            return args[0];
        askForSecondString.count++;
        return args[0].concat(" ", str);
    }

    if (arguments.length == 1)
        return askForSecondString;
    if (arguments.length == 2) {
        return args[0].concat(" ", args[1]);
    }
}
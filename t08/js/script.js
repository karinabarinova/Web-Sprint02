"use strict"

function checkBrackets(str) {
    if (typeof str !== "string")
        return -1;
    let depth = 0;
    let braket = false;
    let res = 0;
    for (let i = 0; i <= str.length; i++) {
        if (str[i] === '(') {
            depth++;
            braket = true;
        }
        if (str[i] === ')') {
            depth ? depth-- : res++;
            braket = true;
        }      
    }
    if (!braket)
        return -1;
    return depth + res;
}
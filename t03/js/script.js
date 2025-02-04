"use strict"

var num = +prompt("Input number from 1 to 10", '5');
if (Number.isFinite(num))
    if (num > 0 && num <= 10)
        showIdiom(num);

function showIdiom(num) {
    switch(num) {
        case 1:
            alert("Back to square 1");
            break;
        case 2:
            alert("Goody 2-shoes");
            break;
        case 3:
        case 6:
            alert("Two's company, three's a crowd");
            break;
        case 4:
        case 9:
            alert("Counting sheep");
            break;
        case 5:
            alert("Take five");
            break;
        case 7:
            alert("Seventh heaven");
            break;
        case 8:
            alert("Behind the eight-ball");
            break;
        case 10:
            alert("Cheaper by the dozen");
            break;
        default:
            alert("Invalid input");
            break;
    }
}
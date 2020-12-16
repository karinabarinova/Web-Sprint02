let firstName = prompt("Enter your first name", '');
let lastName = prompt("Enter your last name", '');
let res = isValid(firstName);
if (res == null) {
    console.log("Wrong input!");
    alert("Wront input!");
} else {
    res = isValid(lastName);
    if (res === null) {
        console.log("Wrong input!");
        alert("Wront input!");
    } else {
        sayHi(firstName, lastName);
    }
}

function sayHi(firstName, lastName) {
    firstName = capitalize(firstName);
    lastName = capitalize(lastName);
    console.log(`Hi ${firstName} ${lastName}`);
    alert(`Hi ${firstName} ${lastName}`);
}

function capitalize(string) {
    if (string.charAt(0) != string.charAt(0).toUpperCase())
        return string.charAt(0).toUpperCase() + string.slice(1);
    return string;
}

function isValid(string) {

    if (!(/^[a-z]+$/i.test(string)))
        return null;
    return 1;
}
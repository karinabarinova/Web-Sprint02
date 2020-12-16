'use strict'

let string = makeName();
if (string !== null) {
    alert(string);
}

function makeName() {
    let name, age, gender, description;

    if ((name = getName()) == null || (age = getAge()) == null || !(gender = getGender()) == null) {
        return null;
    }
    if (gender === `male` && +age < 18) {
        description = "boy";
    }
    if (gender === `male` && +age >= 18) {
        description = "man";
    }
    if (gender === `female` && +age < 18) {
        description = "girl";
    }
    if (gender === `female` && +age >= 18) {
        description = "woman";
    }
    if (gender.length == 0 && +age < 18) {
        description = "kid";
    }
    if (gender.length == 0 && +age >= 18) {
        description = "hero";
    }
    return `The supurhero name is: ${name}-${description}!`;
}

function getName() {
    let animalName = prompt("What animal is the superhero most similar to?\nUsage: maximum 20 letters, one word, no digits", '');
    if (!/^[A-Z]{1,20}$/ig.test(animalName)) {
        alert("Invalid animal input");
        return null;
    }
    return animalName;
}

function getGender(){
    let animalGender = prompt("Is the superhero male or female? Leave blank if unknown or other.\nUsage: male/female or blank if unknown", '');
    if (!/^male$/i.test(animalGender) && !/^female$/i.test(animalGender) &&
    !/^$/.test(animalGender)) {
        alert("Invalid gender input");
        return null;
    }
    return animalGender;
}

function getAge() {
    let animalAge = prompt("How old is the superhero?\nUsage: length <= 5, only digits, cannot start with 0", '');
    if (!(/^[1-9][0-9]{0,4}$/g.test(animalAge))) {
        alert("Invalid age input");
        return null;
    }
    return animalAge;
}
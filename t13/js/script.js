"use strict"

function Calculator() {
    this.result = 0;
    this.init = (n) => this.result = n;
    this.add = (n) => this.result += n;
    this.mul = (n) => this.result *= n;
    this.div = (n) => this.result /= n;
    this.sub = (n) => this.result -= n;
    this.alert = () => setTimeout(() => alert(this.result), 5000)
}

// const calc = new Calculator();

// console.log(
//     calc.init(2), // 2
//     calc.add(2),  // 4
//     calc.mul(3),  // 12
//     calc.div(4),  // 3
//     calc.sub(2),  // 1
// );
// calc.alert()    // 1
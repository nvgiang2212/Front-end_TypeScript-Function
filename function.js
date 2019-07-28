"use strict";
exports.__esModule = true;
require("./scss/styles.scss");
function square(num) {
    return num * num;
}
console.log(square(5));
// output: 25
// Function expression
var squareFE = function (num) {
    return num * num;
};
// Higher-order function
function add(a) {
    return function (b) {
        return a + b;
    };
}
var addWidth5 = add(5);
console.log(addWidth5(3));
console.log(addWidth5(15));

import './scss/styles.scss';

function square(num: number): number {
    return num * num;
}

console.log(square(5));
// output: 25

// Function expression
const squareFE = function (num: number): number {
    return num * num;
}

// Higher-order function
function add(a: number): Function {
    return function (b: number): number {
        return a + b;
    }
}

const addWidth5 = add(5);
console.log(addWidth5(3));
console.log(addWidth5(15));
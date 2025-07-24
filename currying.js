// Currying is technique of breaking single function which take mutiple argument into a sequence of function which take single argument

// Normal function

// function add(a, b, c) {
//     return a + b + c;
// }
// console.log(add(1, 2, 3));

// curried function

function curriedadd(a) {
    return function (b) {
        return function (c) {
            return a + b + c;
        }
    }
}
console.log(curriedadd(4)(6)(8));


// Real Example of Multiply Currying ( It just create high order function )

function Multiply(a) {
    return function (b) {
        return a * b;
    }
}
const double = Multiply(5);
console.log(double(2));
console.log(double(5));


// Write a function curriedCalc that:

// Takes two numbers (one by one)

// Then takes an operator (+, -, *, /)

// Returns the calculated result
function curriedCalc(a) {
    return function (b) {
        return function (c) {
            switch (c) {
                case "+": return a + b;
                case "-": return a - b;
                case "/": return a / b;
                case "*": return a * b;
                default: return "Invalid Operator";
            }
        }
    }
}

console.log(curriedCalc(3)(5)('&'));



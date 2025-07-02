// console.log(greet());


// function greet() {
//     console.log("hello vip");
//     return 12;
// }

//function expression not hoisted because here const is used
// const vip = function(name) {
//     return "hi, " + name;
// }
// console.log(vip("vipul"));


// arrow function
// const arrow = (a, b) => a + b;
// console.log(arrow(8, 8));




// A normal function greetUser(name) → returns "Welcome, [name]!"
// console.log(greetuser("vipul"));
// function greetuser(name){
//     return "welcome, " + name;
// }

// A function expression double(x) → returns x * 2
// console.log(double(8));
// function double(x) {
//     return x * 2;
// }

// An arrow function square(n) → returns n * n

// const square = (n) => n * n;
// console.log(square(6));



// closure easy example
function counter() {
    let count = 0;
    return function () {
        count++;
        console.log(count);
    };
}
const inc = counter();  // here inc store function return as here counter is returning function itself
inc();
inc();
inc();

//event handlers and timers 
function delayedGreeting(name) {
    setTimeout(function ()  {
        console.log("hello" + name);
    }, 2000);
}
delayedGreeting("vipul");

function giveGreeting() {
    setTimeout(() => {
        
    }, timeout);
}

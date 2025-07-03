//basic example
// callback is a function passed as argument to other function (which need to be later called)
function greet(name, callback) {
    console.log("Hi ," + name);
    callback();

}

greet("vipul", saybye);
function saybye() {
    console.log("GoodBye");
}

//High order function - a function that either take function as argument or return a function
function operate(x, fn) {
    return fn(x);
}
console.log(operate(7, square));
function square(n) {
    return n * n;
}

// Built in High order function in js
// 1..foreach
// arrayRemove.foreach() this is syntax
[1, 3, 5, 7, 9].forEach(function (x){
console.log(x);
})
    
    
// [1, 3, 5, 7, 9]  // This is your array (the data)

// .forEach(         // This is the Higher-Order Function (the "parent" function)
//   function (x) {   // This entire 'function (x) { ... }' is the callback function
//     console.log(x);
//   }
// )

// 2.map() PURPOSE is to operate over each element in array,transform each element based on logic return brand new array , it always retrun a new array of same length as original 
const multiply = [1, 3, 5, 7, 9].map(function (n) {
    return n * 6;
})
console.log(multiply);

//3.filter()he .filter() method in JavaScript is another Built-in Higher-Order Array Method, just like .forEach() and .map().

// Its primary purpose is to create a new array containing only the elements from the original array that pass a certain test (a condition).
const even = [1, 2, 3, 4, 5, 6, 7, 8, 9].filter(function (n)
{
    return n % 2 === 0;
})
console.log(even);


// 4.reduce basic syntax is.reduce(function, 0);
const sum = [1, 2, 3, 4].reduce((acc, val) => acc + val, 0);
console.log(sum); 


const sumtradition= [1, 2, 3, 4].reduce(function(acc, val) {
    return acc + val; // acc is 4 and every time opeartion perform acc value get updated and it take new value and then return 
  }, 4);
  
console.log(sumtradition);   // here what is happening that firstly acc is 4, then return 4 + 1 it will be 5 for next acc  then value 
  
const subtradition = [4, 3, 2, 1].reduce(function (acc, val) {
    return acc - val;     
}, 0);
console.log(subtradition);


// Real world use case ( Api callback example)
function fetchdata(url, callback) {
    setTimeout(function()  {
        const data = { id: 1, name: "Vipul" };
        callback(data);// now here inside callback whole function is coming and inside that callback function the data is being passed as data with id and name so it do console.log of data.name (i.e user.name)
    }, 1000);
}
fetchdata('/api/getusername', function (user) {   // here we call function as pass parameter as url and function whole as call back
    console.log("Users:" + user.name);
});

//Now coming to ❗ problem (i.e is callback hell)
// loginuser("Vipul", function (user) {
//     getuserProfile(user, function (profile) {
//         getSettings(profile, function (setting) {
//             // to nested callback it it callback we will solve using async await
//         })
//     })
// })

// Example Write a function doMath(x, callback) that:

// Takes a number and a callback

// Returns callback(x)

function doSquare(x, callback) {
    const resu = callback(x);
    return resu;
}
const res = doSquare(4, function (n) {
    return n * n;
})
console.log("Square of given number is " + res);



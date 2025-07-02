console.log(vip);//undefined
var vip = 12;
// console.log(vip);
//12
//var declarations are hoisted and initialized with undefined. Only the declaration is hoisted, not the assignment.
//what happed behind the scene when i run it
// var vip;//declartion move to top
// console.log(vip);
// vip = 12;
// console.log(vip);
// console.log(vip1);here also it is hoisted but value is not assigned as undefined its in temporal dead zone
let vip1 = 15;
// console.log(vip1);




// let greet = function () {
//     console.log("hello vip");
// }
// greet();

greet();
function greet(){
    console.log("hello vip");
}

//Before promise async code was written as callback but issue was callback Hell
// dosomething(function (result){
//     doNext(result, function (nextresult) {
//         dofinal(nextresult, function (finalresult) {
//             console.log(finalresult);
//         })
//     })
// })

// const mypromise = new Promise((resolve, reject) => {
//     let sucess = true;
//     setTimeout(() => {
//         if (sucess) {
//             resolve("Sucess");
//         } else {
//             reject("Failed");
//         }

//     }, 1000);
// }
// );

// console.log(mypromise);
// mypromise.then((message) => {
//     console.log(message);
// })
// mypromise.catch((err) => {
//     console.log(err)
// })

// setTimeout(() => {
    
// }, timeout);


let mypromise1 = new Promise(function (resolve, reject) {
    setTimeout(() => {
       resolve("promise has been resolved") 
    }, 3000);
})

mypromise1.then((message) => {
    console.log(message);
})


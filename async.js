//if we put async before any function then that function will retrun promise, 
async function greet() {
    return "Hello !"
}
// greet().then(vip => console.log(vip));this is single line with arrow function

greet().then(function (vip) {
    console.log(vip);
})

async function failGreet() {
    throw new Error("Something went wrong");
}
failGreet().catch(vip => console.error(vip.message));

// Fetch user details.

// Then, use the user's ID to fetch their posts.

// Then, log both.

// promise syntax the promise have 3 state pending fulfilled(means resolved) rejected 
new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        if (success) {
            //task success
            resolve("Data fetched sucessfully");
        } else {
            // task fail
            reject(new Error("Network error could not fetch data"));
        }
    }, 2000);
});






// --- HELPER FUNCTIONS (Simulating Async Operations) ---

// A basic delay function that returns a Promise
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Simulates fetching user data
function getUserProfile(userId) {
    console.log(`[User] Fetching profile for ID: ${userId}...`);
    return delay(1200).then(() => { // Simulate 1.2 seconds delay
        if (userId === 1) {
            return { id: 1, name: "Alice", email: "alice@example.com" };
        } else if (userId === 2) {
            return { id: 2, name: "Bob", email: "bob@example.com" };
        } else {
            throw new Error(`User with ID ${userId} not found.`); // Simulate failure
        }
    });
}

// Simulates fetching a user's orders
function getUserOrders(userId) {
    console.log(`[Orders] Fetching orders for user ID: ${userId}...`);
    return delay(1500).then(() => { // Simulate 1.5 seconds delay
        if (userId === 1) {
            return [{ orderId: "A1", item: "Laptop" }, { orderId: "A2", item: "Mouse" }];
        } else if (userId === 2) {
            return [{ orderId: "B1", item: "Keyboard" }];
        } else {
            throw new Error(`No orders found for user ID ${userId}.`); // Simulate failure
        }
    });
}

// Simulates processing a payment
function processPayment(amount) {
    console.log(`[Payment] Processing payment of $${amount}...`);
    return delay(2000).then(() => { // Simulate 2 seconds delay
        const success = Math.random() > 0.3; // 70% chance of success
        if (success) {
            return `Payment for $${amount} successful! Transaction ID: ${Math.random().toString(36).substring(7)}`;
        } else {
            throw new Error(`Payment failed for $${amount}. Insufficient funds.`);
        }
    });
}

// Simulates sending a notification
function sendNotification(message) {
    console.log(`[Notification] Sending: "${message}"...`);
    return delay(800).then(() => { // Simulate 0.8 seconds delay
        const success = Math.random() > 0.1; // 90% chance of success
        if (success) {
            return "Notification sent.";
        } else {
            throw new Error("Notification service unavailable.");
        }
    });
}

console.log("--- Helper functions loaded ---");
// You'll write your solutions below this line

getUserProfile(1).then(data => {
    console.log(`User Found: ${data.name}, Email: ${data.email}`)
})
    .catch(error => {
    console.error(`Error Fetching user: ${error.message}`)
    })

//failure case
console.log("Attempting to fetch user 99 Promise chain example");
getUserProfile(99).then(data => {
    console.log(`User found: ${data.name}, Email: ${data.email}`)
})
    .catch(error => {
    console.error(`Error Fetching user: ${error.message}`)
    })
//trying to fetch user with userid 2
console.log("Attempting to fetch user 2");
getUserProfile(2).then(data => {
    console.log(`User found: ${data.name}, Email: ${data.email}`)
})
    .catch(error => {
    console.error(`Error Fetching user: ${error.message}`)
    }) 

async function displayuserprofile(userid) {
    console.log(`Attempting to fetch user ${userid} (Async/Await)...`);
    try {
        const user = await getUserProfile(userid);
        console.log(`User Found vip: ${user.name},Email: ${user.email}`)
    }
    catch (error) {
        console.error(`Error Fetching user: ${error.message}`)
    }

}
displayuserprofile(1);
displayuserprofile(99);

getUserProfile(1).then(data => {
    console.log(`Username: ${data.name}`);
    return getUserOrders(user.id);
}).then(orders => {
    console.log(`Dashboard found: ${orders.length}`);
    console.log(`Order details: ${orders}`);
}).catch(error => {
    console.error(`Dashboard error: ${error.message}`)
});




// Anatomy of promise
// const promise = new Promise((resolve, reject) => {
//     const t = true;
//     if (/*success*/ t) {
//         resolve("Success Data");
//     }
//     else {
//         reject("Something went wrong");
//     }
        
// })

const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = false;
        if (success)
        {
            resolve("Promise resolved");
        } else {
            reject("Promise rejected");
        }
    }, 2000);
})

console.log(myPromise);
//consuming promise in js
myPromise.then(data => {
    console.log("Resolved with:", data);

}).catch(error => {
    console.error("rejected with", error);
})






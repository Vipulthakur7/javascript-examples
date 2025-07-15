console.log("Start");

setTimeout(() => console.log("Timeout"), 0);

Promise.resolve().then(() => console.log("Promise"));

console.log("End");










console.log("1");

setTimeout(() => console.log("2"), 0);

Promise.resolve().then(() => console.log("3"));

console.log("4");



function counter() { // This is our magical factory that makes helpers
  let count = 0;    // (1) This is a secret counter inside the factory, starting at zero

  // (2) The factory produces and returns a 'helper' function
  return function () {
    count++;        // (3) This helper can see and change *its* secret counter
    console.log(count); // (4) And it tells you the current value of its secret counter
  };
}

const inc = counter(); // (5) We ask the factory to make us a helper.
                       //    The factory runs, sets *its* secret 'count' to 0,
                       //    and gives us a helper named 'inc'.
                       //    This helper 'inc' now "remembers" *that specific* secret 'count' (which is 0).

inc(); // (6) We ask 'inc' to work. It sees its remembered 'count' (0), makes it 1, and says "1".
inc(); // (7) We ask 'inc' again. It sees its remembered 'count' (1), makes it 2, and says "2".
inc(); // (8) We ask 'inc' again. It sees its remembered 'count' (2), makes it 3, and says "3".


// secret function example
function secretVault() {
    let secret = "TOP SECRET";
    return {
        getSecret: function () {
            return secret;
        },
        setSecret: function (newSecret) {
            secret = newSecret;
      } , 
    };
}

const vault = secretVault();
console.log(vault.getSecret());
vault.setSecret("Vipul");
console.log(vault.getSecret());




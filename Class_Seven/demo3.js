// demo 3 closures
// this is a good example of one
// closures (the CreateBankAccount function) creates a template that can
    // be used for all accounts


function createBankAccount(initialBalance) {
    let userBalance = initialBalance;

    return {
        getBalance: function () {
            return userBalance;
        },
        deposit: function (amount) {
            userBalance += amount; // dont forget this is shorthand
            return userBalance;
        },
        withdraw: function (amount) {
            userBalance -= amount;
            return userBalance;
        },
    };
}

const myAccount = createBankAccount(100);
let myBalance;

myBalance = myAccount.getBalance(); // have to call this getbalance each time to restate the amount
console.log("My Balance upon creation: ", myBalance); // should be 100 at first

myAccount.deposit(99);
myBalance = myAccount.getBalance();
console.log("My Balance after depositing $99: ", myBalance); // should be 199

myAccount.withdraw(10);
myBalance = myAccount.getBalance();
console.log("My Balance after withdrawing $10: ", myBalance); // should be 189


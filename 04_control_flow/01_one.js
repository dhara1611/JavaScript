// if(condition){

// }

const isUserLoggedIn = true;
const temprature = 41;


// if(temprature === 50){
//     console.log("temprature is less than 50")
// }else{
//     console.log("temprature is not 50");
    
// }
// console.log("global execution")

// conditional operator ==, >,<, >=, <=, ===, !=,

// const score =200;
// if(score == 200){
//     let power = "fly"
//     console.log(`user power : ${power}`);
    
// }
// console.log(`user power : ${power}`);
    
// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");

// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
    
// } else if (balance < 900) {
//     console.log("less than 750");
    
// } else {
//     console.log("less than 1200");

// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("User logged in");
}
// singleton
// Object.create

// object literal
const mySym = Symbol("key1")


const JsUser = {
    name: "Dhara",
    "full name": "Dhara Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "Dhara@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])


// after use freeze method cant change in object values
// JsUser.email= "Dhara@mmt.com";
// Object.freeze(JsUser);
// JsUser.email= "Dhara@tesla.com";
// console.log(JsUser.email)

JsUser.myFunction = function (){
    console.log("hello World");
    
}
JsUser.greeting = function(){
    console.log(`hello user my name is ${this.name}`)
}

console.log(JsUser.myFunction());
console.log(JsUser.greeting());

// 2types of data type primitive and non primitive (refrence)

// primitive 7 types : number string BigInt null undefined symbol boolen

const id = 1;
const score = 157.454;
const name= "Dhara";
const IsLoggedIn = true;
const outsidetemp =null;
let userEmail;

const type = Symbol('123');
const anothertype = Symbol('123');

// console.log(type === anothertype);


// Refrence

// array object function

const newarray = [1,2,3];
const obj= {
    'id': '1',
    'name':'Dhara'
}

const Myfunction = function(){
    console.log("hello World")
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++ 

// Stack (Primitive) Heap (Non - Primitive )

let mychannel = "live and let live";
let anotherchannel = mychannel;

anotherchannel = "do what you want";

console.log(mychannel);
console.log(anotherchannel);


// Non Primitive 

let userone = {
    email : "dhara@google.com",
    name : "Dhara"
}

let usertwo = userone;

usertwo.email = "dhara@mmt.com"

console.log(userone);
console.log(usertwo);

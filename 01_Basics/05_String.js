let name ="Dhara";
let scoreCount= 50;


console.log(`my name is ${name} and the score count is ${scoreCount}`)

const gameName= new String('Dhara-google-job');


console.log(gameName.charAt(2));
console.log(gameName.indexOf('g'));

let newstring = gameName.substring(0,4)
console.log(newstring);
let anotherString = gameName.slice(-1, 4)
console.log(anotherString);


let newStringone = "    Dhara     "
console.log(newStringone.trim());

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20', "-"));

console.log(url.includes("com"));

console.log(url.split('/'))

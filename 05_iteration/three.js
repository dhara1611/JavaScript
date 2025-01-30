//for of loop on array and object
//["","",""]
//[{},{},{}]


var arr = [1,2,3,4,5];
for(const num of arr){
    console.log(num);
    
}

var greetings = "hello World"
for(const greet of greetings){
   // console.log(`Each char of ${greet}`);   
}

// map 

const map = new Map()
map.set("In", "India")
map.set("USA", "United state of America")
map.set("Fr", "France")
map.set("In", "India")

// for(const contry of map){
//     console.log(contry);
    
// }

for(const [key, value] of map){
    console.log("[",key, ":-", value,"]");   
}

// const arr1 = [1, 2,7, 3, 4, 5, 2, 6, 1, 3, 3];

// const arr1 = "helloworld"

// const filter = [...new Set(arr1)]
// console.log(filter);

// Set is used to remove duplicate from array and string

const obj = {
    game1: 'NFS',
    game2: 'Spiderman'
}

for(const [key, value] of obj){
    console.log(key, ':-', value);
    
}
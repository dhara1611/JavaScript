// anything write in {} it's clode block scope
let a = 20;
var c= 300;
if(true){
    let a = 10;
    let b
    // console.log("inner", a);
    // console.log(b);
    // console.log(c);
}
//console.log(a);
// console.log(b);

//child function can access parents variable 
// function one(){
//     const name = "Dhara";
//    function Two(){
//         const website ="Youtube"
//         console.log(name)
//    }
//    Two()
//    console.log(website);
   
// }

// one();


// if(true){
//     const username ="Dhara"
//     if(username==="Dhara"){
//         const website = "Youtube"
//         console.log(username + website)
//     }
//     console.log(website)
// }
// console.log(username)

 // ++++++++++++++++++ interesting ++++++++++++++++++


// function declaration  can access before intialization 
addone(5)
function addone(number){
    console.log(number+1)
}




// function expression can not acess before intialization  because of hosting
addTwo(5); 
const addTwo = function(num){
    
    return num+2

}

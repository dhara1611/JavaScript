// function myname(){
//     console.log("D");
//     console.log("H");
//     console.log("A");
//     console.log("R");
//     console.log("A");
// }

// let task=myname();

// console.log(task);


// function addition(n1, n2){//n1, n2 parameters 
//     console.log("testing");
//     return console.log(n1 + n2);
    
    
// }
// addition(5, 2)//argument pass

function loginUserMessage(username="ram"){
        if(!username){
            console.log("please enter username");   
            return
        }
        return `${username} just logged in`
}

console.log(loginUserMessage("Dhara"));

 
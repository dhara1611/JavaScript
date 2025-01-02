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
//rest operator in function

function calculatecartPrice(...num1){// rest operator collect all value in one bunch and store in array
    return num1
}
console.log(calculatecartPrice(100,200,300))

// get object data in function 


const User={
    username : "Dhara",
    Price:199,
}

function handaleObject(getData) {
    return `username is ${getData.username} and product Price is ${getData.Price}`    
}

console.log(handaleObject(User));

// get Array data in function 

const mynewArray = [200, 400 , 600]

function handaleArray(getArray){
        return `array value ${getArray[2]}`
}

console.log(handaleArray(mynewArray))
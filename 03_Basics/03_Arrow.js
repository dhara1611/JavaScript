// "this" is refer to the curent context 


// const user= {
//     name:"Dhara",
//     price :"999",
//     welcomeMessage : function(){
//         console.log(`welcome ${this.name} to Our Website`);
//         console.log(this)
//     }
// }
// user.welcomeMessage()
// user.name= "sam";
// user.welcomeMessage()


// function userDetail(){
//  const UserName="Dhara";
//  console.log(UserName);
// }
// userDetail();


const chai = function (){
    const UserName="Hitesh";
    console.log(UserName);
}
chai();

//explicite return 
const test1 = (num1, num2) =>{
    return num1+num2
    
}
console.log(test1(3,4));

// implisit return

const test2 = (num1, num2) => num1+num2

console.log(test2(3,4));

const ob1 = (num1, num2)=>({username:"Dhara"})

console.log(ob1());

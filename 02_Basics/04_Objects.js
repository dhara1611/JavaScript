// const tinderUser = new Object();
// console.log(tinder)

const tinderUser = {};
// console.log(tinderUser)

tinderUser.id = "123abc"
tinderUser.name = "Dhara"
tinderUser.IsLoggedin = true

const {id:userId, name, IsLoggedin} = tinderUser //Destructre from Object
console.log(userId);

// console.log(id);

const regularUser = {
    emai : "dahra@gmail.com",
    fullName : {
        UserName :{
            firstName: "Dhara",
            LastName: "Vakhare"
        }
    }
}

// console.log(regularUser?.fullName?.UserName?.firstName) //optional Chaining

const  obj1 = {1:"a", 2:"b"}
const  obj2 = {3:"c", 4:"D"}
const  obj3 = {5:"E", 6:"F"}

const allObj = {obj1, obj2, obj3} // all object in one but three differnt obj
// console.log(allObj) 

const obj4 = Object.assign(obj1, obj2, obj3) // correct way to merge all object in one object
// console.log(obj4) 

const obj5 = {...obj1, ...obj2, ...obj3} // latest way to merge object
// console.log(obj5)

const user= [
    {
        id: "123",
        name:"radha",
        emai : "radha@gmail.com"
    },
    {
        id: "345",
        name:"Krishna",
        emai : "Krishana@gmail.com"
    },
    {
        id: "678",
        name:"jay",
        emai : "jay@gmail.com"
    }
]
console.log(user[2].name)

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(tinderUser.hasOwnProperty("IsLoggedin"));


// json
// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }
const myDate = new Date();

// console.log(myDate); //2024-12-23T08:58:19.343Z
// console.log(myDate.toDateString());//Mon Dec 23 2024
// console.log(myDate.toISOString());//2024-12-23T08:59:37.827Z
// console.log(myDate.toJSON());//2024-12-23T09:02:06.725Z
// console.log(myDate.toLocaleDateString());//12/23/2024
// console.log(myDate.toLocaleString());//12/23/2024, 9:02:06 AM
// console.log(myDate.toLocaleTimeString());//9:02:06 AM
// console.log(myDate.toString());//Mon Dec 23 2024 09:02:06 GMT+0000 (Coordinated Universal Time)


// let myCreateDate  = new Date(2024,11,20);
// let myCreateDate  = new Date(2024,11,20,5,3)
    let myCreateDate  = new Date("2024-12-11")
    // console.log(myCreateDate.getMonth()+1)
// console.log(myCreateDate.toLocaleTimeString());

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
newDate.toLocaleString('default', {
    weekday: "long",
    
})


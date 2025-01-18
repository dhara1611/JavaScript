// for
// for (let i = 0; i <=10; i++) {
//     let element = i;
//     if(element == 5){
//         console.log("condition check first");
//     }
//     console.log(i);
// }

// inner loop outer loop 

// for (let i = 1; i <=10; i++) {
//      console.log("ourt loop" + i)
//      for (let j = 1; j <= 10; j++) {
//        console.log(i +"*" + j +"=" +i*j)
//      }
    
// }

// let Myarray = [1,2,3]
// for (let i = 0; i < Myarray.length; i++) {
//     const element = Myarray[i];
//     console.log(i);
    
    
// }

// break and continue


for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log("detected 5")
        continue;
    }
    console.log(`value of i is ${i}`)
    
}


for (let i = 0; i <=20; i++) {
    if(i==5){
        console.log("detected 5")
        break;
    }
    console.log(`value of i is ${i}`)
    
}
const myArr = [0,1,2,3,4]
const myarr2 = new Array(1,2,3,4,5,6)

// console.log(typeof myArr);
// console.log(typeof myarr2);


//Array Methods

// myArr.push(5,6,7);
// myarr2.pop();
// console.log( myArr);
// console.log( myarr2);

myArr.unshift(9,8,7)
console.log( myArr);
// myarr2.shift();
// console.log( myarr2);

// console.log(myArr.includes(0));
// console.log(typeof myArr.join());



// splice

const newarr3 = myArr.splice(1,5);
console.log(myArr);
console.log(newarr3);

//slice

const newarr1 = myArr.slice(0,2);
console.log(newarr1);
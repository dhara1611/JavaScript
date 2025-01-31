const myNumber = [1,2,3,4,5]
// const newNumber= myNumber.map((num)=> num+10)
// console.log(newNumber);

const newnum = myNumber.map((num)=> num*10).map((num)=> num+1).filter((num)=>num>=40)
console.log(myNumber);

console.log(newnum);

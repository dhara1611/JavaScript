const fruits = ['mango', 'cheery', 'chiku', 'apple'];
const another_fruits = ['banana', 'jackfruit'];

// fruits.push(another_fruits);
console.log(fruits);

// to merge array we use concat and spread operator
// const all_fruits = fruits.concat(another_fruits);
// console.log(all_fruits);

// const all_fruits = [...fruits, ...another_fruits]
// console.log(all_fruits);

//merge this aaray into one single array use flat
const newarray = [1,2,3,4,[5,6], 7,8 ,[1,2,3,[4,5]]]

console.log(newarray.flat(1));//[ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, [ 4, 5 ] ]
console.log(newarray.flat(Infinity));//[ 1, 2, 3, 4, 5, 6, 7, 8, 1, 2, 3, 4, 5 ]

console.log(Array.isArray("Dhara"))
console.log(Array.from({name: 'Dhara'}));//Intersting


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));


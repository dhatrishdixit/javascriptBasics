const arr1 = ['hi','hey','hello'];
const arr2 = ['new1','new2'];

// arr1.push(arr2);
console.log(arr1);

const combined = arr1.concat(arr2);
console.log(combined);


// spread operator
console.log(arr1 + arr2);
console.log(typeof (arr1 + arr2))
const differentWay = [...arr1,...arr2];
console.log(differentWay);

const another_arr = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_arr.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("dhatrish"));
console.log(Array.from("dhatrish"));
//interesting
console.log(Array.from({
    name:"dhatrish",
    age:21
}));
// interesting 

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));

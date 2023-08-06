const myArr3 = [0,1,2,3,4,"dhatrish",true];
const myArr = [1,2,3,4,5]
// resizable
// of mixed data types

// shallow copies are done 
// console.log(typeof myArr);
// console.log(myArr);
// console.log(typeof Array);

const myArr2 = new Array(0,1,2,3,4,5);
// console.log(myArr2[0]);
// console.log(myArr2);
// console.log(typeof myArr2);
// array methods 

myArr.push(6);
// console.log(myArr);
myArr.pop();
// console.log(myArr);

myArr.unshift(9);
// very very unoptimised , as all the elements are shifted 
// console.log(myArr);
myArr.shift();
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(100));

const newArr = myArr.join();
// console.log(newArr);
// console.log(typeof newArr);


// slice ,spice
// slice - doesnt change original array 
// splice - changes original array 

const check = [0,1,2,3,4,5];

const check1 = check.slice(1,3);
console.log(`original array before any operation ${check}`);
console.log("!!!SLICE METHOD!!!");
// console.log(check);
console.log(`original array after slice operation ${check}`);
console.log(`subarray after slice operation ${check1}`);


const check2 = check.splice(1,3);
console.log("!!!SPLICE METHOD!!!");
console.log(`original array after splice operation ${check}`);
console.log(`subarray after splice operation ${check2}`);


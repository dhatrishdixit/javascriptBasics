// primitive data types 
// call by value - ie jab bhi inme changes hote hai inke copy mein hote hai direct inme nhi hote hai , like call by value in function 
// 7 types : string, number , boolean , null, undefined, Symbol , BigInt


// Reference ( Non primitive )

// Array , Objects ,Functions
// non primitive ke data types ko object bolte hai , aur functions ke data type ko functional objects bolte hai 

const myArr = [1,2,3,4,5];
const myObj = {
    check: true,
};
const myFun = function hello(){
    console.log('hi0');
}

console.log(myFun);
console.log(typeof myFun);
myFun();
function hi(){
    console.log('hi1');
}
hi();
// js is dynamically typed language



// imp 
const a = 5;
const b = 5; 
const arr1 = [5];
const arr2 = [5];
console.log(a == b);
console.log(arr1 == arr2);


// https://262.ecma-international.org/5.1/#sec-11.4.3





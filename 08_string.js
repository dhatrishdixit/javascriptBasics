const name = "dhatrish";
const age = 21;

console.log(`hi my name is ${name} and age is  ${age}`);

// array is also an object 
// const hey = [1,2,3,4];
// console.log(typeof hey);

const gameName = new String('dhatrish');

console.log(gameName);
console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName);
console.log(gameName.charAt(2));


const newString =  gameName.substring(0,4);
console.log(newString);


const newString2 = gameName.slice(-7,-1);
console.log(newString2);

const newStringOne = "   dhatrish    ";
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://dhatrish.com/dhatrish%20singh";

console.log(url.replace('%20',"-"));
console.log(url.includes('dhatrish'));
console.log(url.includes('dhatrish1'));


const newCheck = "dhatrish-hc-hi";
console.log(newCheck.split('-'));
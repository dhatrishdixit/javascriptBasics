// this mostly used when we have to convert a string with value of a number to a number 
let score = "33";
console.log(typeof(score));

let valueInNumber  = Number(score);
console.log(typeof(valueInNumber));
console.log(valueInNumber);

let score1 = "33a";
console.log(typeof(score));

let valueInNumber1  = Number(score1);
console.log(typeof(valueInNumber1));
console.log(valueInNumber1);

let score2 = null;
console.log(typeof(score2));

let valueInNumber2  = Number(score2);
console.log(typeof(valueInNumber2));
console.log(valueInNumber2);

let score3 = undefined;
console.log(typeof(score3));

let valueInNumber3  = Number(score3);
console.log(typeof(valueInNumber3));
console.log(valueInNumber3);

let score4 = true;
console.log(typeof(score4));

let valueInNumber4  = Number(score4);
console.log(typeof(valueInNumber4));
console.log(valueInNumber4);

// "33" => 33
// "33abc" => NaN not a number but its type is number anyways
// "true" converts to 1 ,and false converts to 0


let isLoggedIn ="" ;

console.log(typeof(isLoggedIn));

let booleanConversion = Boolean(isLoggedIn);

console.log(booleanConversion);

console.log(typeof booleanConversion);

// 1 -> true , 0 -> false
// in case of string agar string empty hai ,yani "" hai toh 0 , else agar string is non empty " " <- even this string is non empty then 1 


// same can be done for strings 

let string1 = true;

console.log(typeof string1);

let convertedString = String(string1);

console.log(typeof convertedString);
console.log(convertedString);
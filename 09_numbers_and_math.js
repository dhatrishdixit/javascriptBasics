const score = 400;
// console.log(score);

const balance = new Number(400);
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const check = 50000000 ;
// console.log(check.toLocaleString('en-IN'));


//             MATHS

// console.log(Math);
// console.log(Math.abs(-1));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.3));
// console.log(Math.floor(4.9));
// min and max 


console.log(Math.random());
// always gives value 0 < Math.random() < 1 
console.log(Math.floor(Math.random()*10) + 1);

const min = 10 ;
const max = 20 ;


//important formula for getting in a range 
console.log(Math.floor(Math.random()*(max-min+1)) + min);
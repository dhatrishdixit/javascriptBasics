// Dates 

let myDate = new Date();
console.log(typeof Date);
// constructor function
console.log(typeof myDate);
console.log(myDate);
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());

// let myCreatedDate = new Date(2023,0,23,5,3,1);
// //month starts with zero 
// console.log(myCreatedDate.toLocaleString());

//yy-mm-dd
let myCreatedDate = new Date("2023-01-03");
console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now();
console.log(myTimeStamp);
//get time is important 
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000))
let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth() +1);
console.log(newDate.getDay());

newDate.toLocaleString('default',{
    weekDay:"long",
})


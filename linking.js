let js1 = 'amazing';
if(js1==='amazing'){
    alert('js is amazing');
}
console.log(40 + 8);
console.log('dhatrish');

let firstName = 'dhatrish';

console.log(firstName);
console.log('true');
console.log(true);
console.log(typeof true);
console.log(typeof 'true');
console.log(typeof js1);
firstName = 3;
console.log(firstName,typeof firstName);
let year;
console.log(year,typeof year);


let age = 21;
age =22;

const birthday = 2001;
// birthday=2002;
// const birthday2;

//var is similar to let but there are many differences which will be discussed later 

// lastName = 'dixit';   don't use this method as it will create a global property 
// console.log(lastName);

const age1 = 2036 -birthday;
const age2 = 2037 -birthday;
console.log(age1,age2);
console.log('dhatrish'+'dixit');

let x = 10+5;
x +=10;//x= x+10;
x *=2;
x++;
console.log(x);
//comparision operator 
console.log(age2 > age1);//> < >= <= ==

const isLegal = age1 >= 18;

let height;
let weight;

let bmi = (height,weight) =>{
     return weight/(height*height);
}
let markGreaterBmi = (mark,john)=>{
    return mark > john ;
}
console.log(bmi(1.69,78),markGreaterBmi(bmi(1.69,78),bmi(1.95,92)));
console.log(bmi(1.88,95),bmi(1.88,95) > bmi(1.76,85));

const firstName1 = 'dhatrish';
const work = 'student';
const birthYear = 2001;
const currentYear = 2023;

const dhatrish = "I'm " + firstName1 + ' a ' + work + (currentYear-birthYear) + ' years old' ;

console.log(dhatrish);

// template literals;

const dhatrishNew = `I'm ${firstName1} a ${work} ${currentYear - birthYear} years old`;
console.log(dhatrishNew);
// `` can be used for all strings 
// `` can be used at all occurances


console.log('string with \n\
multiple\n\ lines');

//`` using backticks we can perform line break very easily 
console.log(`string with 
multiple 
lines`);


const markBmi1 = bmi(1.69,78);
const johnBmi1 = bmi(1.95,92);
const markBmi2 = bmi(1.88,95);
const johnBmi2 = bmi(1.76,85);

if(markBmi1 > johnBmi1){
    console.log(true);
}else{
    console.log(`${markBmi1} & ${johnBmi1}`);
}

if(markBmi2 > johnBmi2){
    console.log(true);
}else{
    console.log(`${markBmi2} & ${johnBmi2}`);
}
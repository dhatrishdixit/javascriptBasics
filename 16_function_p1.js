const hi = function(){
    console.log("hi");
}

const user = hi ;// this , hi , is just the reference to the function 
//reference
// console.log(user);
// hi()  //invoking function
//execution


// imp difference between return and console.log 
console.log("________________________________________________")
const func = function (num1 ,num2){
    console.log("hello")
    console.log(num1 + num2);
} 

const value = func(3,5);
console.log("--------")
console.log(value);

console.log("________________________________________________")
const func1 = function (num1 ,num2){
    console.log("hello");
    return (num1 + num2);
} 

const value1 = func1(3,5);
console.log("--------")
console.log(value1);


const hey = (name = "anon") =>{
    if(name){
        return `hi ${name}`;
    }
    else{
        return `enter name first`  ;
    }
}

console.log(hey("dhatrish"));
console.log(hey()); // w/o conditional this will print undefined 



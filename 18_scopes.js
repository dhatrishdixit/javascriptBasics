// var scope is different 


// this is global scope
let a = 300 ;
var c = 300 ;
let a1 = 50;
if(true){

    // this is block scope
    a1 = 30 ; 
    let a = 30;
    const b = 20 ;
    // c = 10 ; this wrong example , cause even a1 will change whic is let and it is not any exception 

    /// but this is diff 
    var d = 50
    console.log("inner ",a);
}
 // yaha ye diff hai ki agar change ho rhi hai value kis scope ke andar to bahar bhi change hogi 

console.log('a1',a1);
console.log(a);
console.log(d);
//console.log(b);
// var scope is different it is visible to outside also 
console.log(c);


// node ke andar global scope alag hai as compared to browser ke andar se




function one(){  
    const userName= "dhatrish";
    function two(){
        const lastName = "singh dixit";
        console.log(userName,lastName);
    }
    // console.log(lastName);
    two();
  
}

one();



if(true){
    const userName = "dhatrish";
    if(userName === "dhatrish"){
        const lastName=" singh dixit 2";
        console.log(userName + lastName);
    }
    // console.log(user + lastName);
}
// console.log(userName);


//+++++++++++++++++++interesting+++++++++++++

// js mein variables kuch bhi hold kar sakte hai , funcctions , json , objecs , kuch bhi 

// variable ko declare karne se pehle nhi kar sakte , before intiailisation 


console.log(addOne(5));
function addOne(num){
    return num + 1;
}

// addTwo(5);

const addTwo = function (num) {
    return num + 2 ;
}

console.log(addTwo(5));



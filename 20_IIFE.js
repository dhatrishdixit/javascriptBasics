// Immediately invoked function expression (IIFE)


// this also helps in reducing global scope pollution 


(function(){
    console.log("db is connected");
})();


// named iife |
(function check(){
    console.log("db is connected");
})();

// iife require ; to execusion 
//unnamed iife
( ()=>{
    console.log("db is connected 2")
} )();


( (name)=>{
    console.log("db is connected 2",name)
} )("dhatrish");


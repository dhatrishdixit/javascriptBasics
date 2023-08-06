// declare karne ke do tareeke hai -
// 1 literal
// 2 constructor

// singleton - through constructor 


// object literals 

// symbol 

const sym = Symbol("dhatrish");
// making symbol a key

// V IMP - updated --> Symbols can be used as object keys. Only strings and symbols can be used as object keys
// Against what many think, JavaScript object keys cannot be Number, Boolean, Null, or Undefined type values. Object keys can only be strings & symbols, and even though a developer can use other data types to set an object key, JavaScript automatically converts keys to a string value.



const jsUser = {
    name:"dhatrish",
    "firstName":"dhatrish",
    "last name":"dixit",
    // [] is used for symbol
    [sym]:"hi",
    age :21 ,
    location :"raipur",
    email:"dhatrish29@gmail.com",
    isLoggedIn : true,

}


// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(1,jsUser.firstName);
// console.log(2,jsUser["firstName"]);
// // you cannot use jsUser.last name , because of SPACE 
// console.log(jsUser["last name"]);
// console.log(sym);
// console.log(jsUser[sym]);

jsUser.email = "12345@gmail.com";
// console.log(jsUser["email"]);
// Object.freeze(jsUser);
jsUser.email = "123456789@gmail.com";
// console.log(jsUser);

jsUser.greeting  = function () {
    console.log(`hi ${this.name}`);
}



// console.log(jsUser.greeting);
console.log(jsUser.greeting());

// jsUser.greeting ;
jsUser.greeting();


// this - jisne bhi bulaya hai uska kam kar do 

function myFun(num){
    this.num = num ;
    return num*5;
}

myFun.two = 2 ;
console.log(myFun(5));
console.log(myFun.prototype);
console.log(myFun.two);



function createUser(userName,score){
    this.userName = userName ;
    this.score = score ;
}

// this is wrong 
// createUser.prototype.scoreAdd(num){
//     return this.score + num ;
// }


//createUser.prototype.methodName = function() {...}

createUser.prototype.addScore = function(num){
    this.score = this.score + num ;
    return this.score ;
}

const user1 = new createUser('dhatrish',5);
console.log(user1.addScore(5));
console.log(user1.score);


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/
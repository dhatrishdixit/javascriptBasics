//object literal - collection of property and methods 


const user = {
    userName :'dhatrish',
    loginCount : 1,
    isLoggedIn:true,
    
    getUserDetails: function(){
        console.log(`${this.userName}`);
        console.log(this);
    }
}


// user.getUserDetails();
// console.log(this);

function myFun(name,isLoggedIn,loginCount,greeting){
    this.name = name ;
    this.isLoggedIn = isLoggedIn;
    this.LoginCount = loginCount;
    this.greeting = greeting;

    return this ;
    // return this is by default 

}

const user1 = new myFun('dhatrish',true,3,greeting);
function greeting (){
    console.log(`hi ${this.name} how's your day been `) ;
    console.log(this);
    
}
const user2 = new myFun('dhatrish2',false,1);

console.log(user1);
user1.greeting();

console.log('_____________',typeof user2);
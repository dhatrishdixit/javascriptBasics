//below one is singleton 
const user = new Object() ;

//const user = {};

user.name = "dhatrish";
user.email = "dhatrish29@gmail.com";
user["isLoggedIn"] = false ;

// console.log(user);


const newUser = {
    email:"some@gmail.com",
    userName :{
        userFullName :{
            firstName: "dhatrish",
            lastName : "dixit"
        }
    }
}


// console.log(newUser.userName.userFullName);

// this is important 
// const obj1 = {1:"a", 2 :"b"};
// const obj2 = {1:"c", 2 :"d"};
// const obj3 = {1:"e", 2 :"f"};

// const obj4 = {...obj1,...obj2,...obj3};
// console.log(obj4)


const obj1 = {1:"a", 2 :"b"};
const obj2 = {3:"c", 4 :"d"};
const obj3 = {5:"e", 6 :"f"};

console.log({obj1,obj2,obj3});

//assign method ; it also returns a new object 

const obj4 = Object.assign({},obj1,obj2,obj3);
console.log(obj4);

const obj5 = {...obj1,...obj2,...obj3};
console.log(obj5);



const user2 = [
    {
        name:"dhatrish",
        email:"dhatrish29@gmail.com"
    },
    {
        name:"dhatrish1",
        email:"dhatrish291@gmail.com"
    },
    {
        name:"dhatrish2",
        email:"dhatrish292@gmail.com"
    }
]


console.log(user2[0].name);
// imp arrays are object with predetermined keys only 
console.log("__________________________________________________");
console.log(Object.keys(user2));
console.log(Object.values(user2));
console.log(Object.entries(user2));

console.log("__________________________________________________");
console.log(Object.keys(user));
console.log(Object.values(user));
console.log(Object.entries(user));

//array
console.log(user2.hasOwnProperty('0'));
console.log(user2.hasOwnProperty('1'));
console.log(user2.hasOwnProperty('2'));
console.log(user2.hasOwnProperty('3'));

//object
console.log(user.hasOwnProperty('0'));
console.log(user.hasOwnProperty('name'));
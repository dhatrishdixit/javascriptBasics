// browser ke andar jo global object hai woh window object hai 

const user = {
    name:"dhatrish",
    price:999,

    welcomeUser:function(){
        console.log(`welcome ,${this.name}`);
        console.log(this);
    },

    check:function(){
        console.log(this);
    }
}

user.welcomeUser();
user.check();

console.log(this);
// global in node is an empty object 
// whereas for browser it is window object

function hey(){
    let userName = "dhatrish";
    console.log(this);
    console.log(this.userName);
}

hey();
const obj2 = {userName:"dhatrish"};
const hey1 = (obj) =>{
    console.log("obj: ",obj);
    let userName = "dhatrish";
    console.log(this);
    console.log(this.userName);
}
console.log('check');
hey1(obj2);

const arrow = () => {
    console.log("hi");
}

arrow();

// implicit return - dont have to write return keyword

const check1 = () => "hi"
const check4 = () => ("hi");
const check2 = () => ("hi123","dsfaffd","hi456");
const check3 = () => ({
    userName:"dhatrish",
    lastName:"singh dixit",
})

console.log(check2());






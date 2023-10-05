// concept of call is function borrowing 

const user = {
    firstName : 'dhatrish',
    lastName : 'singh dixit',

}

function getUser(homeTown,homeState){
    console.log(`${this.firstName} ${this.lastName}, ${homeTown} , ${homeState}`);    
}

const user2 = {
    firstName :'hey',
    lastName :'hello',
}

// when call method is used the first parameter passed is the reference to the obj 

// function borrowing 
getUser.call(user,'bilaspur','CG');
getUser.apply(user,['bilaspur','CG']);
getUser.call(user2,'hi','gm');

// bind method , this is used to give a copy which can be invoked later 
console.log('_____________________')
const dhatrishUserCall = getUser.bind(user,'bilaspur','CG');
dhatrishUserCall();



console.log('_____________________________________________________');

function setInfo(firstName){
     this.firstName = firstName ;
}
// here call is used in a technique of function borrowing 
// v v imp 

function getInfo(firstName,lastName,homeTown){
    setInfo.call(this,firstName);
    this.lastName = lastName;
    this.homeTown = homeTown;
}


const newInfo = new getInfo('hey','hello','hi');
console.log(newInfo);


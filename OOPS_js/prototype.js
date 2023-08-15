// const myStr = 'dhatrish      ';

// console.log(myStr.length);

const myArr = [1,2,3];
const myObj = {
    userName:'dhatrish',
    id:29,
    isloggedIn:true,
    context:function(){
        return this;
    }
}
Array.prototype.dhatrish = function(){
    console.log('hi dhatrish');
}

myArr.dhatrish()
// myObj.dhatrish()

Object.prototype.dhatrish1 = function(){
    console.log('dhatrish is present in all objects');
}

myArr.dhatrish1();
myObj.dhatrish1()



//inheritance 

const user = {
    userName : 'dhatrish',
    email:'dhatrish29@gmail.com'
}

const Teacher ={
    makeVideo : true ,
}


const TeachingSupport = {
    isAvailable :false,
}

const TAsupport ={
    makeAssignment :'js assignment',
    fullTime : true ,
    __proto__: TeachingSupport
}

// or __proto__ can be accessed from outside also 

Teacher.__proto__  = user ;


// this is prototypal inheritance  , v v imp 
// this is how inheritance works behind the scene in js 



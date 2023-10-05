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

    // 1st way 
    __proto__: TeachingSupport
}

// or __proto__ can be accessed from outside also 
//2nd way 
Teacher.__proto__  = user ;
console.log(Teacher.makeVideo);

// this is prototypal inheritance  , v v imp 
// this is how inheritance works behind the scene in js 


// 3rd way 
// modern syntax 


Object.setPrototypeOf(TeachingSupport,Teacher);

// this way you can set prototypes of one to the other 
// Object.setPrototypeOf(TeachingSupport,Teacher.__proto__);
// console.log(Teacher);
// console.log(TeachingSupport);
// console.log(TeachingSupport.__proto__); 
// console.log(Teacher.__proto__);



// __proto__ is used to work with the prototype of individual objects. It's a property found on object instances and allows you to access and manipulate the prototype chain for a specific object.

// prototype is used to define the prototype that will be shared among instances created by a constructor function. It's a property of constructor functions and is used to add properties and methods that will be inherited by instances created from that constructor.


//Use __proto__ when you want to work directly with the prototype of a specific object instance.

// Use prototype when you want to set up the shared prototype for instances created by a constructor function.
console.log('_________________________')
const str = "  dhatrish ";

String.prototype.trueLength = function(){
       console.log(this);
       console.log(this.trim().length);

}

str.trueLength();
"js ".trueLength();

const descriptor = Object.getOwnPropertyDescriptor(Math,'PI');

console.log(descriptor);
// this tells that the property is not re writable 

const myObj = {
    name : 'dhatrish',
    age: 22 ,
    wantToWorkWith:'JS',
    intro:function(){
        console.log(`${this.name} is ${this.age} old and wants to work with ${this.wantToWorkWith}`)
    }
}

console.log(Object.getOwnPropertyDescriptor(myObj,'name'));

// Object.defineProperty(Math,'PI',{
//     writable: true
// })

Object.defineProperty(myObj,'name',{
   // writable: false,
    enumerable: false
})
console.log(Object.getOwnPropertyDescriptor(myObj,'name'));


for (const [key,value] of Object.entries(myObj)) {
    if(typeof value !== 'function'){
        console.log(`${key}:${value}`);
    }
}
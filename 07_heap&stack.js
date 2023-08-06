// stack (primitive)
// heap ( non primitive)


// remember variable name is always stored in stack 
// example of stack 

// copy of one is given to the other 
let firstOne = 11 ;
let secondOne = firstOne ;
secondOne = 12;
console.log(firstOne,secondOne);


// here obj1 and obj2 are reference to the same object , references are stored in stack whereas corresponding objects are stored in heap , i.e. both obj1 and obj2 points towards the same object therefore changing one changes other 
let obj1 = {
    email:"dhatrish@gmail.com",
}

let obj2 = obj1;
obj2.email = "dhatrish29@gmail.com";

console.log(obj1,obj2);
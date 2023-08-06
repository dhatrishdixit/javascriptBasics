// functions returning a function , you stored the returned function in another variable which is later called to invoke it 


// function greet() {
//     function sayHello(name) {
//       console.log("Hello, " + name + "!");
//     }
//     return sayHello;
//   }
  
//   const greetFunc = greet();  // greetFunc now holds the returned function
  
//   greetFunc("Alice");  // Output: Hello, Alice!
//   greetFunc("Bob");    // Output: Hello, Bob!
  

function cancellable(){
    const timerId = setTimeout(()=>{
       console.log("hey dhatrish")
    },1000);
    
    const cancelFn  = () =>{
        clearTimeout(timerId);
        // console.log("timeout would have been cancelled");
    }
    return cancelFn;
}

const toCancel = cancellable();
toCancel()


// imp 
const a = 5;
const b = 5; 
const arr1 = [5];
const arr2 = [5];
console.log(a == b);
console.log(arr1 == arr2);


console.log(typeof String);
console.log(typeof Object);
console.log(typeof Number);
console.log(typeof 
Array);
// this will give function , because they are of type constructor function
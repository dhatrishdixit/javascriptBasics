const hey = function (){
    console.log("hi") ; 
    }
    console.log("working");
    //1 
    hey ;
    console.log("working");
    
    //2 
    hey() ;
    console.log("working");
// The difference between the two code snippets is in how they handle the function `hey`.

// 1. `hey;`
//    In this code, `hey;` is simply a reference to the function `hey`. When this line is executed, it does nothing in terms of function execution. It's like mentioning the function's name without actually calling it. The function `hey` is defined but not invoked, so "hi" will not be printed to the console.

// 2. `hey();`
//    In this code, `hey();` is an actual function call. It invokes the `hey` function, which results in "hi" being printed to the console. The parentheses `()` are used to call the function and trigger its execution.

// To summarize:

// - `hey;` is a reference to the function but doesn't invoke it.
// - `hey();` is a function call, which executes the function and performs its intended task (in this case, printing "hi" to the console).
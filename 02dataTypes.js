"use strict";


//alert( 2 + 3 ) we are using node js therefore 

console.log("dhatrish");

// data type
// number => upto 2 to the power of 53
//bigint
//string => ""
//boolean => true /false
//null => standalone value 
//undefined => when value is not defined or not given
// symbol => unique

//object 

// null - is an object 
// undefined is a type 

console.log(typeof undefined);

console.log(typeof null);

// symbols are unique 
//Symbol(value) returns a unique symbol
// they are primitive cause they dont behave like objects that is they are not pointed to reference 
//Because symbols are the only primitive data type that has reference identity (that is, you cannot create the same symbol twice), they behave like objects in some way
// but still they are primitive 
let sym1 = Symbol('foo')
let sym2 = Symbol('foo')
 
console.log(Symbol(sym1==sym2)); 
console.log(sym1==sym2);
/*false, symbols are guaranteed to be unique*/


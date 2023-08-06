// for of 

// ["","",""]
// [{},{},{}]

// for-of - can be used for map, arrays , and string , but not in objects


const arr = [1,2,3,4,5];

for (const iterator of arr) {
    console.log(iterator);
}

const greeting = "greeting dhatrish";

for (const greet of greeting) {
     console.log(`Each char is ${greet}`);   
}

// Maps - known for unique values

const map = new Map();
map.set('IN','India');
map.set('US','United States of America');
map.set('FR','france');
// map.set('FR','france2');

for(const [key,value] of map){
    console.log(key,":-",value);
}

// forof is used for maps 

// this cannot be used for objects 

// const myObj = {
//     key1:"hey",
//     key2:"hey2",
//     key3:"hey3" 
// }

// for (const iterator of myObj) {
//     console.log(iterator);
// }
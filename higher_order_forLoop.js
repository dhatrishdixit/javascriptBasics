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

// this can be used for objects
// for in can be used in both obj and arr
const myObj = {
    key1:"hey",
    key2:"hey2",
    key3:"hey3"
}

for(const iterator in myObj) {
    // console.log(`${iterator} = ${myObj[iterator]}`); 
}

const myArr = [1,2,3,4,5,6];

for (const key in myArr) {
    // console.log(`${key} = ${myArr[key]}`); 
}


// forin in map 
//iterations cannot be done on
let map = new Map();

map.set("hi","hey");
map.set("hi2","hey2");
map.set("hi3","hey3");
map.set("hi4","hey4");

for (const key in map) {
    
    // console.log(key);
    
}

for (const iterator of map) {
    console.log(iterator);
  
}
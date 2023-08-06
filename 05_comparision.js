// compare same data types
//auto conversion 
// console.log("2">1);
// console.log("02">1);

console.log(null > 0);
console.log(null == 0);


// comparision aur equality check ka alag alag cheezein hain

//kyunki comparision check kar leta hai after coversion , aur null ko convert karke 0 bana deta hai ,
// whereas , equality check waisa kuch bhi nhi karta 
console.log(null >=  0);


// so basically aisa hota hai ki 
// comparision check mein null ko pehle zero mein convert karta hai isiliye > mein false aata hai ,aur >= mein true , jabki equality check mein ye conversion nhi hota hai 




console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);

// strict check === , data type bhi check karta hai 

console.log('2'==2);
console.log('2'===2);
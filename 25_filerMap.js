// for returning we dont use forEach

const myNums = [1,2,3,4,5,6];
// const myVal = myNums.forEach((items)=>{
//     console.log(items);
//     return items;
// })

// console.log(myVal);


const myVal =  myNums.filter((nums)=> nums>4);
console.log(myVal);

//or 
const myVal2 = myNums.filter((nums)=>{
    return nums>4;
})
console.log(myVal2);


const myVal3 = [];
myNums.forEach(element => {
    if(element > 4){myVal3.push(element);}
    
});
console.log(myVal3);



const books = [
    {
        title:"book one",
        genre:"history",
        publish:2009,
        edition:2014,
    },
    {
        title:"book two",
        genre:"fiction",
        publish:2000,
        edition:2004,
    },
    {
        title:"book three",
        genre:"history",
        publish:2003,
        edition:2007,
    },
    {
        title:"book four",
        genre:"non fiction",
        publish:2008,
        edition:2012,
    },
    {
        title:"book five",
        genre:"fiction",
        publish:2005,
        edition:2010,
    },
    {
        title:"book six",
        genre:"history",
        publish:2003,
        edition:2010,
    },
    {
        title:"book seven",
        genre:"fiction",
        publish:2005,
        edition:2006,
    }
];


let myBook = books.filter((bk)=>(bk.genre === 'history')) ;
// console.log(myBook);

myBook = books.filter((bk)=>{
    return bk.publish>=2005;
})

// console.log(myBook);

myBook = books.filter((bk)=> (bk.publish >=2005 && bk.genre === "history"));
console.log(myBook);


const programming = ['java','cpp','ruby','js'];

// callback function doesnt have a name

// programming.forEach( function(items){
//     console.log(items);
// } )

// programming.forEach( (items)=>{
//     console.log(items);
// } )

function printMe(item){
    console.log(item);
}


//yahan reference dena hai , function ka bas , usko pura execute nhi kar dena hai 
programming.forEach(printMe);

programming.forEach((item,index,arr) =>{
     console.log(item,index,arr);
})


// most important for working with databases

const db = [
    {
        userName:'dhatrish',
        userEmail:"dhatrish@gmail.com1"
    },
    {
        userName:'dhatrish1',
        userEmail:"dhatrish1@gmail.com1"
    },
    {
        userName:'dhatrish2',
        userEmail:"dhatrish2@gmail.com1"
    },

]


db.forEach((items)=>{
      console.log(items.userName);
})
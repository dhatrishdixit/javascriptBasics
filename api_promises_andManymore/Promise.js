const promiseOne = new Promise(function(resolve,reject){
      setTimeout(()=>{
        console.log('async task1');
        resolve();    
      },1000)
});


promiseOne.then(function(){
    console.log('promise 1 resolved')
});

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('async task 2');
        resolve();
    },1000)
}).then(()=> console.log('promise 2 resolved'));


const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const data = {
            userName : 'dhatrish',
            email : 'dhatrish29@gmail.com'
        }
        console.log(typeof data)
        resolve(data);
    },1000)
})

promiseThree.then((user)=>{
    console.log(user);
})


console.log('this is important because all the async task are added in callback queue and as it is present in call stack directly it will be executed first');
const promiseFour = new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("_________promise 4 ________");
        const data = {
            userName : 'dhatrish',
            email : 'dhatrish29@gmail.com'
        }

        let error = false ;
        if(!error){
            resolve(data);
        }
        else{
            reject("there is something wrong !");
        }
    },1000);
})


promiseFour.then((user)=>{
    console.log('promise resolved');
    console.log(user);
    return user.userName;
}).then((myUser)=>{
    console.log(myUser);
}).catch(err=>console.log(err))
.finally(()=>{
     console.log('promise either resolved or rejected');
})

//async await directly errors ko handle nhi kar sakte directly , jitne asani se then - catch mein kiya ja sakta hai 
const promiseFive = new Promise((resolve,reject)=>{
    setTimeout(function(){
        console.log("_________promise 5 ________");
        const data = {
            userName : 'dhatrish',
            email : 'dhatrish29@gmail.com'
        }

        let error = true ;
        if(!error){
            resolve(data);
        }
        else{
            reject("there is something wrong !");
        }
    },1000);
})

async function consumptionPromiseFive(){
   try{
    console.log('consumption started');
    // here we dont use promiseFive() because it is an object not a function 
    const response = await promiseFive ;
    console.log(response);
   }
   catch(err){
    console.log(err);
   }
}

consumptionPromiseFive();


//  XMLHttpRequest that is a callback-based API, Fetch is promise-based

// fetch using async and await 

// const userData = async () => {
//       try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         console.log('fetching !!');
//         const data = await response.json();
//         console.log(data);
//       }
//       catch(err){
//         console.log("E",err);
//       }

// }

// userData();


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>response.json())
.then((data)=>console.log(data))
.catch((e)=>console.log(e));